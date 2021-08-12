// const { config } = require('dotenv');
const mongoose = require('mongoose');
const config = require('config');
const mongo = config.get('mongoURI');

const connectDB = async (req, res) => {
    try {
        const connect = await mongoose.connect(mongo, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        console.log(`mongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        if (error) {
            console.error(error);
            process.exit(1);
        }
    }
};

module.exports = connectDB;
