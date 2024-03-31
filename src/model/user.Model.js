import { DataTypes } from 'sequelize'

import { pool } from '../database/index.js'
import { Rol } from './rols.Model.js'

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
    },
    id: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
    }
})

export const Patient = pool.define('Patient', {
    idPatient: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    identificationCard: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The identification card cannot be empty"
            }
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The name cannot be empty"
            },
            isAlphanumeric: {
                msg: "The name is invalid"
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The last name cannot be empty"
            },
            isAlphanumeric: {
                msg: "The last name is invalid"
            }
        }
    },
    homeAddress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    innsNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "The birth date is invalid"
            }
        }
    },
    placeOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.CHAR,
        allowNull: false,
        validate: {
            isAlphanumeric: {
                msg: "The inserted option is invalid"
            }
        }
    },
    numberCellphone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 8,
            min: 8,
            isAlpha: {
                msg: "The number phone is invalid"
            },
            isDecimal: {
                msg: "The number phone is invalid"
            }
        }
    },
    bloodType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 3,
            isAlphanumeric: {
                msg: "The blood type is invalid"
            }
        }
    }
});



Rol.hasMany(Users, {
    foreignKey: {
        allowNull: false,
        name: "idRol"
    },
    sourceKey: 'idRol'
});
Users.belongsTo(Rol, {
    foreignKey: {
        allowNull: false,
        name: "idRol"
    },
    targetKey: 'idRol'
});

Users.hasOne(Patient, {
    foreignKey: {
        allowNull: false,
        name: "idUser"
    },
    sourceKey: 'idUser'
});
Patient.belongsTo(Users, {
    foreignKey: {
        allowNull: false,
        name: "idUser"
    },
    sourceKey: 'idUser'
});
