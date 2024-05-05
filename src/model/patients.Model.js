import { DataTypes } from 'sequelize'

import { pool } from '../database/index.js'

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
    }, 
});


export const MedicalRecord = pool.define('MedicalRecord', {
    idMedicalRecord: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    Record: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true, 
        validate: {
            isNull: {
                msg: "The record number cannot be empty"
            }
        }
    }, 
});