import { Rol } from "../model/rols.Model.js";

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
