import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import cors from 'cors';
dotenv.config();


const app= express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDB!");
})
.catch((err)=>{
    console.log(err)
})

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
}
);

app.use('/api/auth', authRouter);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});