import express from 'express'
import { UserModel } from '../Models/UserModel.js';

const router1 = express.Router();

router1
.get('/',(req,res)=>{
   res.send('To Set the Data Method should be POST')
})
.post('/',async(req,res)=>{
   const data = req.body;
   try {
      await UserModel.create({
         url : data.url,
         newurl : data.newurl,
         history : []
      });
      res.status(200).send({status : "Successfully Register"});
   } catch (error) {
      console.log(error);
      res.status(404).send({status: "UnSuccessful Register"});
   }

})



export default router1;