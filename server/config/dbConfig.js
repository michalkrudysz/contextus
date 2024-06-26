import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";

let pool;
try {
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  pool
    .getConnection()
    .then((connection) => {
      console.log("DB connection successful.");
      connection.release();
    })
    .catch((err) => {
      console.error("Error when connecting to the DB:", err);
    });
} catch (err) {
  console.error("Error while creating the connection pool:", err);
}

export default pool;
