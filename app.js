import express from 'express';
import connectDB from './config/db.js';
import userRouter from './router/userRoutes.js';
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);

const startServer = async () => {
    await connectDB();
    app. listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}

startServer();