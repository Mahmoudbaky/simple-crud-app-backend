import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// Create a new instance of the pg client
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

db.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1); // A non-zero exit code (like -1) usually indicates that the process encountered an error or some kind of failure.
});

export const query = (text, params) => db.query(text, params);
