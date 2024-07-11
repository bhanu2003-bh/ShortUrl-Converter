import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    url : {
        type : String,
        required : true,
        unique : true
    },
    newurl : {
        type : String,
        unique : true
    },
    history : {
        type : Array,
        default : []
    }

},{timestamps:true});

export const UserModel = mongoose.model("user",UserSchema);