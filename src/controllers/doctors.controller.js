import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

import { Users } from "../model/users.Model.js";
import { jwtSK, jwtRounds } from '../config/config.js'
import { Doctors, Specialty } from "../model/doctor.Model.js";




export const createDoctor = async (req, res) => {
    const { idSpecialty, name, lastName, password, email, idRol} = req.body;

    if (!idRol || idRol != 2) {
        res.status(401).json({msg: 'Ups!'});
    }
    else if (!idSpecialty && !name && !password && !email)
        res.status(400).json({ msg: 'The fields cannot be empty' });
    else {
        const passwordTk = bcrypt.hashSync(password, Number.parseInt(jwtRounds));
        await Users.create({
            password: passwordTk,
            email,
            idRol,
        }).then(async (user) => {
            const idUser = user.idUser;
            await Doctors.create({
                name, lastName,idUser, idSpecialty
            }).then(Doctor => {
                let token = jwt.sign({ user: user }, jwtSK);
                res.status(201).json({
                    msg: "Doctor was created",
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

export const getPersonalData = async (req, res) => {
    const { token } = req.body;
    jwt.verify(token, jwtSK, async (err, decode) => {
        if (err)
            res.status(500).json({ msg: "Problem has ocurred", err: err })
        else {
            console.log(decode);
            const {idUser} = decode['idUser'];
            await Doctors.findAll({
                include: [
                  {
                    model: Users,
                    where: {
                      idUser: idUser, 
                    },
                    attributes: []
                  },
                  {
                    model: Specialty,
                    attributes: ['nameOfSpecialty'] 
                  }
                ],
                attributes: ['name', 'lastName'],
              }).then(doctors => {
                res.json(doctors);
              }).catch(error => {
                res.json(error);
              });
        }
    })
}