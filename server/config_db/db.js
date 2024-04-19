const mongoose = require('mongoose');
const connectDB = async()=>{
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect("mongodb+srv://Projeto-DBW:DBW2024@cluster0.l9zkp1u.mongodb.net/");
        console.log(`conexão a db efetuada com sucesso`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;