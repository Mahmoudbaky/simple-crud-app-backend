import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable req.body JSON parsing

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
