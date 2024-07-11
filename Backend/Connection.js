import mongoose from "mongoose";

const connect = (url) =>{
   mongoose.connect(url)
   .then(()=>{
    console.log("Mongoose Connected");
   })
   .catch(()=>{
    console.log("Mongoose NotConnected");
   })
};

export default connect;