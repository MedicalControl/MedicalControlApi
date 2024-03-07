import { Sequelize } from "sequelize";


export const userModel = (sequelize) => {
    const { DataTypes } = Sequelize;

    return sequelize.define("Rol", {
        IdRol: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
        }, 
        RolName: {
            type: "VARCHAR(20)"
        }
    })
}