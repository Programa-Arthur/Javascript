const clientesModel = require('../models/clientesModel');

module.exports = {
    // Controlador para salvar cliente
    saveCliente: (req, res) => {
        const data = req.body;
        const errors = clientesModel.validate(data);
        if (errors.length) {
            return res.status(400).json({ errors });
        }
        const saved = clientesModel.save(data);
        return res.status(200).json(saved);
    },

    // Controlador para listar todos os clientes
    listAllClientes: (req, res) => {
        return res.json(clientesModel.all());
    }
}; 