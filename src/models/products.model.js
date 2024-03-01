import {Sequelize} from 'sequelize'

const sequelize  = new Sequelize('Medical_Control','Zero', 'Zero314.', 
{
    host: 'localhost',
    dialect: 'mssql',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },

});

export async function Connection(){
    try{
        sequelize.authenticate()
        .then(() => {console.log('Connected')})
        .catch((error) => {console.log(error)})
    }catch(error)
    {
        console.error('No connected');
    }
}