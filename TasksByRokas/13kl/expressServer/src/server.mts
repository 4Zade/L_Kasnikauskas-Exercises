import express from "express";
import cors from "cors";

import apiRoutes from "./api/routes.mts"
import loggingMiddleware from "./middleware/loggerMiddleware.mts";
import errorHandler from "./middleware/errorHandlerMiddlware.mts";
import { connectDB } from "./DataBase/postgress.mts"

async function initializeDatabase() {
    try {
        await connectDB();
        console.log('[postgres] Database initialized')
    }
    catch (err) {
        console.error("[postgres] Database failed to initialize:", err.stack);
        process.exit(1);
    }
}

async function StartServer() {
    await initializeDatabase()

    const app = express();
    const PORT = process.env.PORT || 3000;
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    app.use(loggingMiddleware);
    
    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

StartServer();