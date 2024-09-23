"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
app.use("/api/v1/auth", authRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
