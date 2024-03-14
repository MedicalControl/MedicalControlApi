import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

import { Users } from '../model/user.Model.js'
import { jwtSK, JKTROUNDS } from '../config/config.js'

export const loginUsers = async (req, res) => {
    const { email, password } = req.body;

    const userWithEmail = await Users.findOne({ where: { email } })
        .catch((err) => { console.log('Error', err) });

    if (!email || !password)
        return res.json({msg: "The fields cannot be empty"})
    if (!userWithEmail || !bcrypt.compareSync(password, userWithEmail.password))
        return res.json({ message: "Email or password dos not match!!" });
    const jwtToken = jwt.sign({ id: userWithEmail.id, email: userWithEmail.email }, jwtSK);
    res.json({ token: jwtToken })
}


export const getAllUsers = async (req, res) => {
    const usersList = await Users.findAll()
    res.json(usersList)
};


export const CreateUsers = async (req, res) => {
    const { password, email, id } = req.body;

    const passwordTk = bcrypt.hashSync(password, Number.parseInt(JKTROUNDS));

    const newUser = await Users.create({
        password: passwordTk,
        email,
        id
    }).then(user => {
        let token = jwt.sign({ user: user }, jwtSK);
        res.json({
            msg: "User was created",
            token: token
        })
    }).catch((err) => {
        res.status(500).json(err);
    });
}