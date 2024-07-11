//imports
import express from 'express'
import 'dotenv/config.js'
import router1 from './Routes/route1.js';
import router2 from './Routes/route2.js';
import cors from 'cors';
import connect from './Connection.js';
import path from 'path'
import { UserModel } from './Models/UserModel.js';


//mongoose connection
connect('mongodb://127.0.0.1:27017/url-shortener');

//constants
const PORT = process.env.PORT
const app = express();

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


//views
app.set('view engine', 'ejs');
app.set('Views',path.resolve('./Views'));

//routes
app.use('/setdata',router1);
app.use('/getdata',router2);


//Home GET request
app.get('/',async(req,res)=>{
  const data = await UserModel.find({});
 
  res.render('home',{
    urls : data
  });
})


//listining
app.listen(PORT,()=>{
  console.log(`Server Running on PORT: ${PORT}...`)
})