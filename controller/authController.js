import * as bcrypt from 'bcrypt'
import { User } from '../model/user.js';
import { createToken } from '../middleware/createToken.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body

    const hashedPassword =  await bcrypt.hash(password, 10)
    if (!hashedPassword) return res.status(500).json({ message: "Internal server error"});

    const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
    })
    .then((user) => createToken(user, res, 201) )
    .catch((err) => {
        console.log(err)
        res.json({
            status: "Failed",
            message: "Error creating user"
        })
    })
}

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username: username }});
    if (!user) return res.status(401).json({ message: "Incorrect username or password" });

    const isAuthorised = await bcrypt.compare(password, user.password);
    if (!isAuthorised) return res.status(401).json({ message: "Incorrect username or password" });

    createToken(user, res, 200);
}