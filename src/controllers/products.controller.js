import { getConnection, queries, sql } from "../database";
import jwt from "jsonwebtoken";

export const loginUsers = async(req, res) => {
 const user = {id: 3};
 const token = jwt.sign({user}, "SecretKey");

 res.json({
    token
 })
}


function ensureToken(req, res, next)
{
    const bearerHeader = req.headers['authorization']; 
    console.log(bearerHeader);
    if (typeof bearerHeader != 'undefined')
    {
        const bearer = bearerHeader.split(" "); 
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }
}





//
export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct)
        res.json(result.recordset)
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

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
            .query(queries.createProduct );
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const getProductById = async(req, res) =>{
    const {id} = req.params;
    
    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.getProductById)
    res.send("product");

    console.log(result.recordset[0]);
}

export const deleteProduct = async(req, res) =>{
    const {id} = req.params; 


    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.deleteProduct)
    
    res.send("Delete products");
}

export const updateById = async(req, res) =>{
    const {id} = req.params;
    const {Name} = req.body;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .input('Name', sql.VarChar, Name)
    .query(queries.updateById)

    res.send("Update products");
}