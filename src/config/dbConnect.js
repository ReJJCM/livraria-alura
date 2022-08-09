import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin@alura.jgzezvp.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;