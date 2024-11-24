import { query } from "../db.js";

export const getUsers = async () => {
  const { rows } = await query("SELECT * FROM users_tb");
  return rows;
};

export const createUser = async (userData) => {
  const { name, email, job, rate, isactive } = userData;
  const { rows } = await query(
    `INSERT INTO users_tb (name, email, job, rate, isactive) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, email, job, rate, isactive]
  );
  return rows[0];
};

export const updateUser = async (userData, userId) => {
  const { name, email, job, rate, isactive } = userData;
  const { rows } = await query(
    `UPDATE users_tb SET name = $1, email = $2, job = $3, rate = $4, isactive = $5 WHERE id = $6 RETURNING *`,
    [name, email, job, rate, isactive, userId]
  );
  return rows[0];
};

export const deleteUser = async (userId) => {
  const { rowCount } = await query(`DELETE FROM clients_tb WHERE id = $1`, [
    userId,
  ]);
  return rowCount > 0; // Returns true if a row was deleted, false otherwise
};

export const searchUsers = async (searchTerm) => {
  const { rows } = await query(
    `SELECT * FROM users_tb WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1`,
    [`%${searchTerm}%`]
  );
  return rows;
};
