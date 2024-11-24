import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable req.body JSON parsing

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
