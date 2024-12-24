const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Username
    process.env.DB_PASS, // Password
    {
        host: process.env.DB_HOST || 'localhost', // Host
        dialect: 'postgres', // Dialect (PostgreSQL)
        port: process.env.DB_PORT || 5432, // Port
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected...');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
