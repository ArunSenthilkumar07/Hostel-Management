const express = require('express');
const dotenv = require('dotenv');
const router = require("./routes/login.js");
const { Sequelize } = require('sequelize');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());


const sequelize = new Sequelize(
    process.env.DB_NAME || 'hostel',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || 'root',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};


const syncDB = async () => {
    try {
        await sequelize.sync();
        console.log('Database synced');
    } catch (error) {
        console.error('Error syncing the database:', error);
        process.exit(1);
    }
};


app.use("/api", router);

app.get("/", (req, res) => {
    console.log(req.method, req.url);
    return res.status(200).send("Welcome to the API!");
});

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectDB();
    await syncDB();
});
