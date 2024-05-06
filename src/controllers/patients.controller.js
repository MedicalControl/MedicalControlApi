import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import fs from 'fs'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import { Patient } from '../model/patients.Model.js'
import { Users } from "../model/users.Model.js";
import { jwtSK, jwtRounds } from '../config/config.js'
import { Image } from "../model/users.Model.js";
import { where } from "sequelize";

export const getPersonalDataP = async (req, res) => {
    const { token } = req.body;
    jwt.verify(token, jwtSK, async (err, decode) => {
        if (err)
            res.status(500).json({ msg: "Problem has ocurred", err: err })
        else {
            console.log(decode);
            await Patient.findAll({
                where: { idUser: decode['idUser'] },
                attributes: ['idImage']
            }).then(async (doctors) => {
                const idImage = doctors[0]['idImage'];
                const imagesData = await Image.findAll({ where: { idImage } });
                console.log('ji');
                imagesData.map(
                    imag => {
                        fs.writeFileSync(path.join(__dirname, '../resource/imagesdb/' + imag.idImage + '-mokeywit.png'), imag.data)
                    })
                    res.json(names);
                    const names = fs.readdirSync(path.join(__dirname, '../resource/imagesdb/'))
            }).catch(error => {
                res.json(error);
            });
        }
    })
}



export const createPatient = async (req, res) => {

    const { password, email, identificationCard, name, lastName,
        homeAddress, innsNumber, profession, birthdate, placeOfBirth,
        sex, numberCellphone, bloodType, data } = req.body;
    var { idRol } = req.body;
    let idUser, idImage;
    idRol ??= 2;
    if (!data)
        idImage = 1;


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
                numberCellphone, bloodType, idUser, idImage
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
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
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
}
export const getImages = async (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const imagesData = await Image.findAll();
    imagesData.map(
        imag => {
            fs.writeFileSync(path.join(__dirname, '../resource/imagesdb/' + imag.idImage + '-mokeywit.png'), imag.data)
        })
    const names = fs.readdirSync(path.join(__dirname, '../resource/imagesdb/'))
    res.json(names);
}