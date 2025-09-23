import express from 'express';
import {createServer} from 'http';
//import {Server} from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
const Server = createServer(app);
const io = new Server();

app.set('port', process.env.PORT || 4000);  




app.get('/', (req, res) => {
    res.send('Server is running');
});

const start = async() => {
    app.set('mongo_user')
        const connectDB = await mongoose.connect("mongodb+srv://samatanayak55_db_user:SmtGNyk@cluster0.4h638pt.mongodb.net/")

    Server.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}

start();