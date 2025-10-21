const express = require('express');
const router = express.Router();
const formularioModel = require('../models/clientesModel');

// POST /formulario
router.post('/', (req, res) => {
	const data = req.body;
	const errors = formularioModel.validate(data);
	if (errors.length) {
		return res.status(400).json({ errors });
	}
	const saved = formularioModel.save(data);
	return res.status(200).json(saved);
});

// GET /formulario/all - lista registros salvos
router.get('/all', (req, res) => {
	return res.json(formularioModel.all());
});

module.exports = router;
