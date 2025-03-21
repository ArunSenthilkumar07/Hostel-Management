const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("hostel", "root", "root", {
    host: "localhost",
    dialect: 'mysql',
    logging: false, 
});

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activeToken: {
        type: DataTypes.STRING,
    }
});

module.exports = { User, sequelize };
