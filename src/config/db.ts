require("dotenv").config();
import { Sequelize, DataTypes } from "sequelize";
import log from "./logger";

const POSTGRES_URL = process.env.DATABASE_URL as unknown as string;
const sequelize = new Sequelize(POSTGRES_URL,{
  dialect: 'postgres', 
  logging: (message) => {
  log.info(`Sequelize iniciado: ${message}`);
  }
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    log.info("✅ Connection has been established successfully.");
  } catch (error) {
    log.error("Unable to connect to the database:", error);
  }
}

export { connectDB, sequelize, Sequelize, DataTypes };