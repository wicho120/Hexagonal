// Contiene la interfaz para interactuar con la base de datos o cualquier otro tipo de almacenamiento de datos.
const Product = require('../models/productModel.js');

class ProductRepository {
    async getById(id) {
        try {
            const product = await new Product();
            return await product.findById(id);
        } catch (error) {
            throw new Error(JSON.stringify({status: 400, message: 'Error retrieving product'}));
        }
    }
}

module.exports = ProductRepository;