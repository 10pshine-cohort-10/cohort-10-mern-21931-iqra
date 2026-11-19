const pool = require('../config/database');

/**
 * @typedef {{ connection_test: number }} ConnectionTestRow
 */

describe('MySQL Database Connection', function () {
  after(async function () {
    try {
      await pool.end();
    } catch (error) {
      throw error;
    }
  });

  it('should connect to the database successfully', async function () {
    try {
      /** @type {[ConnectionTestRow[], unknown]} */
      const [rows] = await pool.query('SELECT 1 AS connection_test');

      if (rows[0].connection_test !== 1) {
        throw new Error('Database connection test failed');
      }
    } catch (error) {
      throw error;
    }
  });
});