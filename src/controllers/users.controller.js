import jwt from "jsonwebtoken";
import bycrypt from 'bcrypt'

import { getConnection, queries, pool } from "../database/index.js";
import AsingToken from '../auth/index.js'


export const loginUsers = async (req, res) => {
    const user = { id: 3 };
    const token = jwt.sign({ user }, "SecretKey");

    res.json({
        token
    })
}

//
export const getUsers = async (req, res) => {
    
};

export const CreateUsers = async (req, res) => {
    const { Correo, Contrasena } = req.body;
    if (!Contrasena || !Correo)
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' });
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Contrasena", sql.VarChar, await bycrypt.hash(Contrasena, 5))
            .input("Correo", sql.VarChar, Correo)
            .input("IDRol", sql.Int, 1)
            .query(queries.createUsers)
        res.json(`Usuario creado`)
    } catch (err) {
        console.log(err);
    }
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
























export const createNewProduct = async (req, res) => {
    const { Name, Description } = req.body;
    let { Quantity } = req.body;
    if (!Name || !Description)
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' });
    if (Quantity == null) Quantity = 0;

    try {
        const pool = await getConnection();
        await pool.request()
            .input("Name", sql.VarChar, Name)
            .input("Description", sql.Text, Description)
            .input("Quantity", sql.Int, Quantity)
            .query(queries.createProduct);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input('id', id)
        .query(queries.getProductById)
    res.send("product");

    console.log(result.recordset[0]);
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;


    const pool = await getConnection();
    const result = await pool.request()
        .input('id', id)
        .query(queries.deleteProduct)

    res.send("Delete products");
}

export const updateById = async (req, res) => {
    const { id } = req.params;
    const { Name } = req.body;

    const pool = await getConnection();
    const result = await pool.request()
        .input('id', id)
        .input('Name', sql.VarChar, Name)
        .query(queries.updateById)

    res.send("Update products");
}