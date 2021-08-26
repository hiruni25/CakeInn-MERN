const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

// Handle Uncaught Exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to Uncaught Exception');
    process.exit(1)
})

// Setting up config file
dotenv.config({path:'backend/config/config.env'})


// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1)
    })
})