import sheetModel from "../models/sheet.js";
import mongoose from "mongoose";

export const getSheets = async(req, res) => {
    try {
        const sheets = await sheetModel.find();
        return res.status(200).json({
            sheets: sheets
        });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSheet = async (req, res) => {
    const sheet = req.body;
    const newSheet = new sheetModel(sheet);

    try {
        await newSheet.save();
        res.status(201).json(newSheet);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSheet = async (req, res) => {
    const { id: _id } = req.params;
    const sheet = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("This is not the sheet you're looking for!");

    const updatedSheet = await sheetModel.findByIdAndUpdate(_id, {...sheet, _id}, { new: true });

    res.json(updatedSheet);
}

export const deleteSheet = async(req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("This is not the sheet you're looking for!");

    await sheetModel.findByIdAndRemove(_id);
    
    res.json({message: 'Annihilation complete!'});
}

export const likeSheet = async(req, res) => {
    const { id: _id } = req.params;
    console.log("likeSheet:");

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("This is not the sheet you're looking for!");

    const sheet = await sheetModel.findById(_id);
    /*console.log(likedSheet);
    likedSheet.likeCount = (likedSheet.likeCount || 0) + 1;
    await likedSheet.save();
    console.log("Upped and saved");*/
    const likedSheet = await sheetModel.findByIdAndUpdate(_id, {likeCount: sheet.likeCount+1}, {new: true});

    res.json(likedSheet);
}