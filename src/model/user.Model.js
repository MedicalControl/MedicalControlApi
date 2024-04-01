import { DataTypes, where } from 'sequelize'

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
        allowNull: false,
        validate: {
            notNull: {
                msg: "The home address cannot be empty"
            }
        }
    },
    innsNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isAlphanumeric: {
                msg: "The profession cannot be alphanumeric"
            }
        }
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    placeOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: {
                msg: "The inserted option is invalid"
            },
            len: {
                args: [1,1], 
                msg: 'The sex is invalid'
            },

        }
    },
    numberCellphone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [8,8], 
                msg: "The number phone is invalid"
            }
        }
    },
    bloodType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [2,3],
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
