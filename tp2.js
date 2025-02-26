import express from 'express';
const app = express();
import  mongoose from 'mongoose';
import Clientrouter from './routes/ClientRoute.js';
import dotenv from "dotenv";
dotenv.config();


app.use(express.json());
app.use("/api/clients",Clientrouter)


mongoose.connect(process.env.MONGODB_DATABASE)
    .then((result)=>{
        app.listen(process.env.DATABASE_PORT,()=>{
        console.log('server is listening on');
    });
});
