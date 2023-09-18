import mongoose from "mongoose";

const sheetSchema = mongoose.Schema({
    name: String,
    description: String,
    profession: String,
    creator: String,
    age: String,
    home: String,
    isPublic: Boolean,
    extraInfo: [{
        title: String,
        value: String
    }],
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    likeCount: {
        type: Number,
        default: 0,
    },
});

const sheetModel = mongoose.model('sheetModel', sheetSchema);
export default sheetModel;