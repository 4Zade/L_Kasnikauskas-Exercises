import express from "express";
import routes from "./routes/index.mjs";
import errorHandler from "./middleware/errorHandlerMiddleware.mjs";
import loggingMiddleware from "./middleware/loggerMiddleware.mjs";
import { connectDB } from "./db/db.mjs";

const initializeDB = async () => {
  try {
    await connectDB();
    console.log('[postgres] Database initialized')
  }
  catch (err) {
    console.error("[postgres] Database failed to initialize:", err.stack);
    process.exit(1);
  }
};

const startDatabaseServer = async () => {
  await initializeDB();

  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  app.use("/api/v1", routes);

  app.use(loggingMiddleware);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

};

// app.get("/health", (req, res, next) => {
//   try {
//     res.status(200).json({
//       status: "success",
//       message: "Server is healthy",
//     });
//   } catch (error) {
//     next(error);
//   }
// });

startDatabaseServer()