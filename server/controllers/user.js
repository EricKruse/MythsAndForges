import userModel from "../models/user.js";

export const getUsers = async(req, res) => {
    try {
        const users = await userModel.find();
        console.log(users)
        res.status(200).json(users);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSpecificUser = async(req, res) => {
    // Fill later or remove
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}