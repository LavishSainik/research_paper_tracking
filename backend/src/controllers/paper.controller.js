import Paper from "../models/Paper.model.js";

export const createPaper = async (req, res) => {
    try{
        const{
            title,
            firstAuthor,
            researchDomain,
            readingStage,
            impactScore,
            citationCount,
            dateAdded
        }=req.body;

        const paper = await Paper.create({
            title,
            firstAuthor,
            researchDomain,
            readingStage,
            impactScore,
            citationCount,
            dateAdded
        });

        res.status(201).json({
            success:true,
            data:paper
        });
    }    catch(error){
        console.error("Error creating paper:", error.message);
        res.status(400).json({
            success:false,
            message:"Server Error: Unable to create paper"
        });
    }
        };


   export const getPapers = async (req, res) => {
  try {
    const {
      readingStage,
      researchDomain,
      impactScore,
      dateRange
    } = req.query;

    const filter = {};

    // Reading Stage filter (multi)
    if (readingStage) {
      filter.readingStage = {
        $in: readingStage.split(",")
      };
    }

    // Research Domain filter (multi)
    if (researchDomain) {
      filter.researchDomain = {
        $in: researchDomain.split(",")
      };
    }

    // Impact Score filter (multi)
    if (impactScore) {
      filter.impactScore = {
        $in: impactScore.split(",")
      };
    }

    // Date Added filter
    if (dateRange) {
      const now = new Date();
      let startDate;

      switch (dateRange) {
        case "thisWeek":
          startDate = new Date(now.setDate(now.getDate() - 7));
          break;
        case "thisMonth":
          startDate = new Date(now.setMonth(now.getMonth() - 1));
          break;
        case "last3months":
          startDate = new Date(now.setMonth(now.getMonth() - 3));
          break;
        default:
          startDate = null;
      }

      if (startDate) {
        filter.dateAdded = { $gte: startDate };
      }
    }

    const papers = await Paper.find(filter)
      .sort({ dateAdded: -1 });

    res.status(200).json({
      success: true,
      count: papers.length,
      data: papers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
