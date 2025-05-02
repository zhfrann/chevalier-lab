const sequelize = require('./../config/db');
const Mahasiswa = require('./mahasiswaModel');

sequelize.sync().then(() => {
    console.log("Database Konek.");
}).catch((err) => {
    console.log("Gagal konek db: ", err);
})

module.exports = { Mahasiswa };