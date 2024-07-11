import express from 'express'
import { UserModel } from '../Models/UserModel.js';
const router2 = express.Router();

router2
.get('/:id',async(req,res)=>{
    
    const ID = req.params.id;
    try {
        const mycollection  =  await UserModel.find({newurl:`http://localhost:8000/getdata/${ID}`});
        res.status(200).redirect(mycollection[0].url);
    } catch (error) {
        res.send({status:"Not Founded!!"})
    }
})


export default router2;