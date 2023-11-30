const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagercluster.qlhhpno.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

module.exports = connectToDatabase;
