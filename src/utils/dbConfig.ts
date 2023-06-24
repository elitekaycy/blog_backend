import { Pool } from "pg";
import { createPostTableQuery } from "../model/Post";
import { error } from "console";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "root",
  port: 5432,
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
