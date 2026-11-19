const pool = require('../config/database');

describe('MySQL Database Connection', function () {
  after(async function () {
    await pool.end();
  });

  it('should connect to the database successfully', async function () {
    const [rows] = await pool.query('SELECT 1 AS connection_test');

    if (rows[0].connection_test !== 1) {
      throw new Error('Database connection test failed');
    }
  });
});