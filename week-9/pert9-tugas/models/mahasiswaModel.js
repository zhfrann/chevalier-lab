const { DataTypes } = require("sequelize");
const sequelize = require('./../config/db');

const Mahasiswa = sequelize.define('Mahasiswa', {
    npm: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jurusan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tahunMasuk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kelas: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "mahasiswa",
    timestamps: false,
});

module.exports = Mahasiswa;