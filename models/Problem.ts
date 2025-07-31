import mongoose from "mongoose";
const problemSchema = new mongoose.Schema ({
    title : {
        type: String,
        required: true
    },

    link : {
        type: String,
        required: false
    },
    
    topics : {
        type: [String],
        required: true
    },

    difficulty : {
        type: String,
        required: true
    },

    dateCompleted: {
        type: Date,
        required: false,
        default: Date.now,
    }
})

const Problem = mongoose.models.Problem || mongoose.model("Problem", problemSchema);

export default Problem;
