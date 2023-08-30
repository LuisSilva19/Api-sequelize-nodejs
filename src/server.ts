require("dotenv").config();
import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB, sequelize } from "./config/db";
import noteRouter from "./routes/noteRoutes";
import log from "./config/logger";
import setupSwagger from "./config/swagger";

const app = express();

app.use(express.json({ limit: "10kb" }));
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.get("/api/healthchecker", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Build CRUD API with Node.js and Sequelize",
  });
});

app.use("/api/notes", noteRouter);

const PORT = 8000;
app.listen(PORT, async () => {
  log.info(`🚀Server started Successfully ${PORT}`);
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    log.info("✅Synced database successfully...");
  });
});

setupSwagger(app);
