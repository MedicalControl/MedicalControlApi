import jwt from "jsonwebtoken";
import bycrypt from 'bcrypt'

import { getConnection, queries, pool } from "../database/index.js";
import AsingToken from '../auth/index.js'
import { Users } from '../model/user.Model.js'
import { Rol } from "../model/rols.Model.js";
export const loginUsers = async (req, res) => {
    const user = { id: 3 };
    const token = jwt.sign({ user }, "SecretKey");

    res.json({
        token
    })
}

export const getUsers = async (req, res) => {
    const Result = await pool.query("SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'Rols' AND column_name = 'RolName'")
    res.json(Result)
};

export const CreateUsers = async (req, res) => {
    const { password, email, id } = req.body;
    try {
        const newUser = await Users.create({
            password,
            email,
            id
        })
        console.log(newUser);
        res.send('user was created')

    } catch (err) { console.log(err) }

}
export const createRol = async (req, res) => {
    const { nameRol } = req.body;
    try {
        const newRol = await Rol.create({
            nameRol,
        })
        console.log(newRol);
        res.send('Rol was created');
    } catch (err) { console.log(err) }
}
export const InicioSesionUsers = async (req, res) => {
    const { Correo, Contrasena } = req.body;
    try {
        const pool = await getConnection();
        const results = await pool.request()
            .input("Correo", sql.VarChar, Correo)
            .query(queries.getPassword);

        return bycrypt.compare(Contrasena, results.recordset[0]['Contrasena'])
            .then((result) => {
                if (result) {
                    const data = {
                        "Token": AsingToken({ ...results.recordset })
                    }
                    res.send(data);
                }
                else
                    throw new Error('Credenciales incorrectas');
            });
    } catch (err) {
        console.log(err);
    }
}



