import express from 'express';
import {createServer} from 'http';

import {Server} from 'socket.io';
import mongoose from 'mongoose';

import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import connectTOSocket from './controllers/SocketManager.js';

const app = express();
const server = createServer(app);
const io = connectTOSocket(server);

app.set('port', process.env.PORT || 4000);  

app.use(cors());
app.use(express.json({limit : '40kb'}));
app.use(express.urlencoded({ limit:'40kb',extended: true }));

const start = async() => {
    app.set('mongo_user')
        const connectDB = await mongoose.connect("mongodb+srv://samatanayak55_db_user:SmtGNyk@cluster0.4h638pt.mongodb.net/")

    console.log(`MONGO conncted DB HOST: ${connectionDB.connection.host}`);
        Server.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}

start();