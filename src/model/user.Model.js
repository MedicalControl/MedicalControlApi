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
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The last name cannot be empty"
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
        allowNull: false,
        validate: {
            notNull: {
                msg: "The profession cannot be empty"
            }
        }
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: {
                msg: "The date is invalid"
            }
        }
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

})
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
