import { DataTypes } from "sequelize";
import { pool } from '../database/index.js'

export const Image =  pool.define('Images',{
    idImage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: {
            isNull: {
                msg: "The image name cannot be empty" 
            }
        }
    },
    data: {
        type: DataTypes.BLOB, 
        allowNull: false, 
        validate: {
            isNull: {
                msg: "The image data cannot be empty"
            }
        }
    }

});

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
export const Departments = pool.define('Departments', {
    idDepartment: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    Name: {
        type: DataTypes.STRING, 
        allowNullL: false, 
        unique: true, 
        validate: {
            isNumeric: {
                msg: "The department name cannot be contain a number"
            }
        }
    }
}); 
export const Municipality = pool.define('Municipality', {
    idMunicipality: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    Name: {
        type: DataTypes.STRING, 
        allowNullL: false, 
        unique: true, 
        validate: {
            isNumeric: {
                msg: "The municipality name cannot be contain a number"
            }
        }
    }
}) 

export const Users = pool.define('Users', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "The email is invalid"
            },
            notNull: {
                msg: 'fields cannot be empty'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'fields cannot be empty'
            }
        }
    }
})
