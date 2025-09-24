import {User} from '../models/userModel.js';
import bcrypt,{hash} from 'bcrypt';
import httpStatus from 'http-status';

const login = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: 'Username and password are required' });
    }

    try{
        const user = await Users.find({ username });
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({ message: 'User not found' });
        }
        if(bcrypt.compare(password, user.password)){
            let token = crypto.randomBytes(64).toString('hex');
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({ token: token });
        }
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: e.message });
    }
}

const register = async (req, res) => {
     
    const { name, username, password } = req.body;

    try{
        const existingUser = await Users.findOne({ username });
        if(existingUser){
            return res.status(httpStatus.FOUND).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
           name: name,
            username: username,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(httpStatus.CREATED).json({ message: 'User registered successfully' });

    }catch (e) {
        res.json({ message: e.message });
}
}

export { login, register };