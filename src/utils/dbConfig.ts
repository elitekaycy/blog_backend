import { Pool } from "pg";
import { createPostTableQuery } from "../blog/model/Post";
import { error } from "console";

import { config } from "dotenv";

config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

async function createTable(createTableQuery: string) {
  try {
    const client = await pool.connect();
    await client.query(createTableQuery);
    console.log("Table created successfully!");
    client.release();
  } catch (error) {
    console.error("Error creating table:", error);
    throw error;
  }
}

createTable(createPostTableQuery).catch((err) => {
  console.error("line 27 --- ", error);
});

export default pool;
