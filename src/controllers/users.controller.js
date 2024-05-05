import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import { Patient } from '../model/patients.Model.js';
import { Specialty } from "../model/doctor.Model.js";
import { Departments, Municipality, Rol, Users} from "../model/users.Model.js";
import { jwtSK } from '../config/config.js';


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
export const getDepartments = async (req, res) => {
    const departmentsData = await Departments.findAll();
    res.json(departmentsData);
}
export const getMunicipality = async (req, res) => {
    const idDepartment = req.params.idDepartment;

    const MunicipalityData = await Municipality.findAll({ where: { idDepartment } })
    res.json({ MunicipalityData });

}
export const getAllUsers = async (req, res) => {
    const Patients = await Patient.findAll();
    res.json(Patients);
};


export const createRol = async (req, res) => {
    const { nameRol } = req.body;
    try {
        const newRol = await Rol.create({
            nameRol,
        })
        console.log(newRol);
        res.send('Rol was created');
    } catch (err) { res.json(err) }
}

export const getAllRol = async (req, res) => {
    const AllRol = await Rol.findAll()
    res.json(AllRol);
}

export const createSpecialty = async (req, res) => {
    const { nameOfSpecialty } = req.body;
    try {
        await Specialty.create({
            nameOfSpecialty,
        })
        res.send('Specialty was created');
    } catch (err) { console.log(err) }
}

export const getAllSpecialty = async (req, res) => {
    const allSpecialty = await Specialty.findAll();
    res.json(allSpecialty);
}
