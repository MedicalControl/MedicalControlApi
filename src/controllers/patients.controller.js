import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import fs from 'fs'
import path from 'path';

import {__dirname} from '../constants/index.js'

import { Patient } from '../model/patients.Model.js'
import { Users } from "../model/users.Model.js";
import { jwtSK, jwtRounds } from '../config/config.js'
import { Image } from "../model/users.Model.js";

export const createPatient = async (req, res) => {
    const { password, email, identificationCard, name, lastName,
        homeAddress, innsNumber, profession, birthdate, placeOfBirth,
        sex, numberCellphone, bloodType } = req.body;
    var { idRol } = req.body;
    let idUser;
    idRol ??= 2;


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
                let token = jwt.sign({ idUser: idUser, idRol: idRol, }, jwtSK);
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

export const photoProfile = async (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, '../resource/images/' + req.file.filename));
    const name = req.file.originalname;
    await Image.create({
        data,
        name
    }).then(() => {
        console.log('The photo profile ok');
    }).catch((error) => {
        console.log(error);
    })
    res.json({msg: "image was saved"})
}
export const getImages = async (req, res) => {
    const imagesData = await Image.findAll();
    imagesData.map(
        imag => {
            fs.writeFileSync(path.join(__dirname , '../resource/imagesdb/' + imag.idImage + '-mokeywit.png'), imag.data)
        })
    const names = fs.readdirSync(path.join(__dirname, '../resource/imagesdb/'))
    res.json(names);
}