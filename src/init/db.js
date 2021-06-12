import { Pool } from 'pg';

export const checkDB = async () => {
  try {
    const pool = new Pool();
    const PoolClient = await pool.connect();
    PoolClient.release();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export const makeDbRequest = async (query) => {
  const pool = new Pool();
  const pgItem = await pool.connect();
  try {
    const res = await pgItem.query(query);
    return {
      value: res,
    };
  } catch (e) {
    return {
      error: e.message,
      value: {
        rows: [],
        rowCount: 0,
      },
    };
  } finally {
    pgItem.release();
  }
};
