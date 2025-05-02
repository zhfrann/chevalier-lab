const Mahasiswa = require('../models/mahasiswaModel');

exports.getAll = async (req, res) => {
    try {
        const data = await Mahasiswa.findAll();
        res.json(data);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

exports.getById = async (req, res) => {
    try {
        const data = await Mahasiswa.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ msg: "Data tidak ditemukan" });
        }
        res.json(data);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

exports.create = async (req, res) => {
    try {
        const data = await Mahasiswa.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

exports.update = async (req, res) => {
    try {
        const data = await Mahasiswa.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ msg: "Data tidak ditemukan" });
        }
        await data.update(req.body);
        res.json(data);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const data = await Mahasiswa.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ msg: "Data tidak ditemukan" });
        }
        await data.destroy();
        res.json(data);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}
