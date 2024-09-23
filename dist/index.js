import express from "express";
const app = express();
const PORT = 5000;
import authRoutes from "./routes/authRoutes.js";
app.use("/api/v1/auth", authRoutes);
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
