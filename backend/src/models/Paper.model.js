import mongoose from "mongoose";
import {
    RESEARCH_DOMAINS,
    READING_STAGES,
    IMPACT_SCORES,
} from "../utils/enums.js";

const paperSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        firstAuthor:{
            type:String,
            required:true,
            trim:true,
        },
        researchDomain:{
            type:String,
            required:true,
            enum:RESEARCH_DOMAINS,
        },
        readingStage:{
            type:String,
            required:true,
            enum:READING_STAGES,
        },
        impactScore:{
            type:String,
            required:true,
            enum:IMPACT_SCORES,
        },
        citationCount:{
            type:Number,
            min:0,
            default:0
        },
        dateAdded:{
            type:Date,
            default:Date.now
        }
    },
    {
        timestamps:true
    }
);

paperSchema.index({researchDomain:1});
paperSchema.index({readingStage:1});
paperSchema.index({impactScore:1});
paperSchema.index({dateAdded:1});

const Paper = mongoose.model("Paper",paperSchema);

export default Paper;