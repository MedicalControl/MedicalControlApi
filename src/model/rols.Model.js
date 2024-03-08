import { DataTypes } from "sequelize";

import { pool } from '../database/index.js'

export const Rol = pool.define('Rol', {
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameRol: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})



