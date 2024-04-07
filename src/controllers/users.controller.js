import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

import { Patient, Users } from '../model/user.Model.js'
import { jwtSK, jwtRounds } from '../config/config.js'


export const loginUsers = async (req, res) => {
    const { email, password } = req.body;

    const userWithEmail = await Users.findOne({ where: { email } })
        .catch((err) => { console.log('Error: ', err) });

    if (!email || !password)
        return res.status(400).json({ msg: "The fields cannot be empty" })
    if (!userWithEmail || !bcrypt.compareSync(password, userWithEmail.password))
        return res.status(400).json({ msg: "Email or password does not match!" });
    const jwtToken = jwt.sign({ id: userWithEmail.id, email: userWithEmail.email }, jwtSK);
    res.status(201).json({ token: jwtToken })
}
export const getOneUser = async (req, res) => {
    const { email } = req.body;

    const usersWithEmail = await Users.findOne({ where: { email } })
        .catch((err) => { console.log("Error: ", err) });

    if (!usersWithEmail) console.log("The email doesn't exist")
    else console.log(usersWithEmail);


}

export const getAllUsers = async (req, res) => {
    const usersList = await Patient.findAll()
    res.json(usersList)
};


export const CreateUsers = async (req, res) => {
    const { password, email, identificationCard, name, lastName,
        homeAddress, innsNumber, profession, birthdate, placeOfBirth,
        sex, numberCellphone, bloodType } = req.body;
    var { idRol } = req.body;
    let idUser;
    idRol ??= 1;


    if (!identificationCard && !name && !lastName,
        !homeAddress && !profession,
        !birthdate && !placeOfBirth && !sex,
        !numberCellphone && !bloodType)
        res.status(400).json({ msg: 'The fields cannot be empty' })
    else {
        const passwordTk = bcrypt.hashSync(password, Number.parseInt(jwtRounds));
        const newUser = await Users.create({
            password: passwordTk,
            email,
            idRol,
        }).then(async (user) => {
            idUser = user.idUser;
            await Patient.create({
                identificationCard, name, lastName,
                homeAddress, innsNumber, profession,
                birthdate, placeOfBirth, sex,
                numberCellphone, bloodType, idUser
            }).then(Patient => {
                console.log(user)
                let token = jwt.sign({ user: user }, jwtSK);
                res.status(201).json({
                    msg: "Patient was created",
                    token: token
                })
            }).catch(err => {
                res.status(500).json({ msg: err['errors'][0].message });
                Users.destroy({
                    where: { idUser }
                })
            })

        }).catch((err) => {
            res.status(500).json(err['errors'][0].message)
        });

    }

}

