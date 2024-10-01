import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: process.env.POSTGRESS_PASSWORD,
    port: 7070,
});

export const connectDB = async () => {
    try {
        await pool.connect();
        console.log("[postgresDB] Database connected");
    } catch (err) {
        console.error(err.stack);
        throw err;
    }
};
