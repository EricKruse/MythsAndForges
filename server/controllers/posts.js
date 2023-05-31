import PostTest from "../models/postTest.js";

export const getPosts = async(req, res) => {
    try {
        const posts = await PostTest.find();
        console.log(posts)
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postTest(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409),json({ message: error.message });
    }
}

// Look up https://www.restapitutorial.com/httpstatuscodes.html for number codes