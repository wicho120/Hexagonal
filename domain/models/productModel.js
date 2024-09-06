const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/mongodb");
// Define el modelo de usuario y la lógica de negocio independiente de la tecnología de persistencia.
class Product{
    async findById(id) {
        console.log(typeof(id))
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('productos');
        const [res] = await collection.find({_id: new ObjectId(id)}).toArray();
        console.log(res)
        return res;
    }
}

module.exports = Product;