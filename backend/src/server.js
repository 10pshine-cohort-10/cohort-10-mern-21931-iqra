require('dotenv').config();

const app = require('./app');
const logger = require('pino')();

/**
 * Server port configuration.
 * @type {number}
 */
const PORT = Number(process.env.PORT) || 5000;

/**
 * Start the HTTP server.
 */
const server = app.listen(PORT);

server.on('listening', () => {
  logger.info(`Server is running on port ${PORT}`);
});

server.on('error', (err) => {
  logger.error({ err }, 'Failed to start server');
  process.exit(1);
});