// logger.js
const { createLogger, format, transports } = require('winston');

// Create a logger instance
const logger = createLogger({
    level: 'info', // Set the logging level
    format: format.combine(
        format.colorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console(), // Log to console
        new transports.File({ filename: 'logs/app.log' }) // Log errors to a file
    ]
});

module.exports = logger;