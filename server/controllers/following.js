import followingModel from "../models/following.js";

export const getFollowedUsers = async(req, res) => {
    try {
        const followed = await followingModel.find();
        console.log(followed)
        res.status(200).json(followed);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createFollowing = async (req, res) => {
    const followingList = req.body;
    const newFollowingList = new sheetModel(followingList);

    try {
        await newPost.save();
        res.status(201).json(newFollowingList);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateFollowedUsers = async (req, res) => {
    const sheet = req.body;
    
}