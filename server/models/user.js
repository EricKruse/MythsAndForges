import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    mailAddress: String,
    password: String,
    sheets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sheet'
      }],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const userModel = mongoose.model('userModel', userSchema);
export default userModel;