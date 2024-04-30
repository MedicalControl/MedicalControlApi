import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

import { Patient, Users } from '../model/patients/patients.Model.js'
import { jwtSK, jwtRounds } from '../config/config.js'

export const createPatient = async (req, res) => {
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
        await Users.create({
            password: passwordTk,
            email,
            idRol,
        }).then(async (user) => {
            console.log(user)
            idUser = user.idUser;
            await Patient.create({
                identificationCard, name, lastName,
                homeAddress, innsNumber, profession,
                birthdate, placeOfBirth, sex,
                numberCellphone, bloodType, idUser
            }).then(Patient => {
                let token = jwt.sign({ user: user }, jwtSK);
                console.log(user.dataValues);
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
            res.status(500).json(err)
            console.log(err);
        });

    }

}