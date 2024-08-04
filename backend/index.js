import express from "express";
import cors from "cors";
import lunarRoutes from "./routes/lunarRoutes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/lunar', lunarRoutes);

app.listen(port, () => {
    console.log("Server is up on Port" + port);
});