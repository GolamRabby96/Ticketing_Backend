import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config"
import bodyParser from 'body-parser';
import cors from "cors";

// ------------------------Import Route----------------------------------------
import ticketRouter from './Routers/ticketRouter.js';
import userRouter from './Routers/userRouter.js';
import messageRouter from "./Routers/messageRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(
    {
        origin: ['http://localhost:3000', 'http://localhost:5173', 'https://ticketing-system-c6af2.web.app'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization']
    }
))

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

console.log(MONGOURL)

// Connect to MongoDB

mongoose.connect(MONGOURL)
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send('hello world my name is golam rabby');
});







app.use(ticketRouter);
app.use(userRouter);
app.use(messageRouter);




const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
};

app.use(errorHandler);
app.listen(PORT, () => { console.log(`App listening at port ${PORT}`) })