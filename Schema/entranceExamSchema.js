import mongoose from "mongoose";

const entranceExamSchema = new mongoose.Schema({
    type: {
        type: String
    },
    subType: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: String
    },
    examLink: {
        type: String
    }
})

export const EntranceModel = new mongoose.model("AddEntrance", entranceExamSchema)
