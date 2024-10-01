const mongoose = require('mongoose');
require('dotenv').config()

const password = process.env.MONGO_PASSWORD
const db = `mongodb+srv://LukasKa:${password}@mern1.dhgw7gz.mongodb.net/?retryWrites=true&w=majority&appName=MERN1`

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("MongoDB connected");
    }
    catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;