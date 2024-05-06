import { Patient } from "./patients.Model.js";
import { Rol, Departments, Municipality, Users, Image } from "./users.Model.js";
import { Doctors, Specialty } from "./doctor.Model.js";

/*
MedicalRecord.hasOne(Patient, {
    foreignKey: {
        allowNull: false, 
        name: "idMedicalRecord"
    }, 
    sourceKey: "idMedicalRecord"
});
Patient.belongsTo(MedicalRecord, {
    foreignKey: {
        allowNull: false, 
        name: "idMedicalRecord"
    }, 
    sourceKey: "idMedicalRecord"
})
*/




Departments.hasOne(Municipality, {
    foreignKey: {
        allowNull: false,
        name: 'idDepartment'
    },
    sourceKey: 'idDepartment'
});
Municipality.belongsTo(Departments, {
    foreignKey: {
        allowNull: false,
        name: 'idDepartment'
    },
    sourceKey: 'idDepartment'
});

Specialty.hasMany(Doctors, {
    foreignKey: {
        allowNull: false,
        name: 'idSpecialty'
    },
    sourceKey: 'idSpecialty'
});

Doctors.belongsTo(Specialty, {
    foreignKey: {
        allowNull: false,
        name: 'idSpecialty'
    },
    targetKey: 'idSpecialty'
})
Users.hasOne(Doctors, {
    foreignKey: {
        allowNull: false,
        name: "idUser"
    },
    sourceKey: 'idUser'
});
Doctors.belongsTo(Users, {
    foreignKey: {
        allowNull: false,
        name: "idUser"
    },
    sourceKey: 'idUser'
});

Image.hasOne(Patient, {
    foreignKey: {
        allowNull: false, 
        name: "idImage"
    }, 
    sourceKey: "idImage"
});
Patient.belongsTo(Image, {
    foreignKey: {
        allowNull: false, 
        name: "idImage"
    }, 
    sourceKey: "idImage"
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
