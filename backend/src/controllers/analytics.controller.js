import Paper from "../models/Paper.model.js";
import { READING_STAGES, RESEARCH_DOMAINS } from "../utils/enums.js";

export const getFunnelData = async (req, res) => {
  try {
    const data = await Paper.aggregate([
      {
        $group: {
          _id: "$readingStage",
          count: { $sum: 1 }
        }
      }
    ]);

    // Normalize & order stages
    const stageMap = {};
    data.forEach(item => {
      stageMap[item._id] = item.count;
    });

    const result = READING_STAGES.map(stage => ({
      stage,
      count: stageMap[stage] || 0
    }));

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getScatterData = async (req, res) => {
  try {
    const data = await Paper.find(
      {},
      { citationCount: 1, impactScore: 1, _id: 0 }
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getDomainStageData = async (req, res) => {
  try {
    const rawData = await Paper.aggregate([
      {
        $group: {
          _id: {
            domain: "$researchDomain",
            stage: "$readingStage"
          },
          count: { $sum: 1 }
        }
      }
    ]);

    const domainMap = {};

    RESEARCH_DOMAINS.forEach(domain => {
      domainMap[domain] = { domain };
      READING_STAGES.forEach(stage => {
        domainMap[domain][stage] = 0;
      });
    });

    rawData.forEach(item => {
      domainMap[item._id.domain][item._id.stage] = item.count;
    });

    res.status(200).json({
      success: true,
      data: Object.values(domainMap)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSummary = async (req, res) => {
  try {
    const result = await Paper.aggregate([
      {
        $facet: {
          papersByStage: [
            {
              $group: {
                _id: "$readingStage",
                count: { $sum: 1 }
              }
            }
          ],
          avgCitationsPerDomain: [
            {
              $group: {
                _id: "$researchDomain",
                avgCitations: { $avg: "$citationCount" }
              }
            }
          ],
          completion: [
            {
              $group: {
                _id: null,
                total: { $sum: 1 },
                completed: {
                  $sum: {
                    $cond: [{ $eq: ["$readingStage", "Fully Read"] }, 1, 0]
                  }
                }
              }
            }
          ]
        }
      }
    ]);

    const completionData = result[0].completion[0] || {
      total: 0,
      completed: 0
    };

    const completionRate =
      completionData.total === 0
        ? 0
        : (completionData.completed / completionData.total) * 100;

    res.status(200).json({
      success: true,
      data: {
        papersByStage: result[0].papersByStage,
        avgCitationsPerDomain: result[0].avgCitationsPerDomain,
        completionRate: completionRate.toFixed(2)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
