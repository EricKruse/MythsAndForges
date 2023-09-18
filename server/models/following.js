import mongoose, { mongo } from "mongoose";

const followingSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    listOfLikeminded: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    favouriteSheets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sheet'
    }]
});

const followingModel = mongoose.model('followingModel', followingSchema);
export default followingModel;