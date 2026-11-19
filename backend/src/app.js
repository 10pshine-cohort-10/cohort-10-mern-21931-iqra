const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const pinoHttp = require('pino-http');

const app = express();

/**
 * Express application instance.
 * @type {import('express').Express}
 */

// Security and request middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(pinoHttp());

/**
 * Health check endpoint.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {void}
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Notes API is running',
  });
});

module.exports = app;