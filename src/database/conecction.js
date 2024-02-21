import sql from 'mssql'

const dbsettings = {
    user: "Zero",
    password: "Zero314.",
    server: "localhost",
    database: "Medical_Control",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return pool;
    } catch (err) {
        console.error(err)
    }
}
export {sql};