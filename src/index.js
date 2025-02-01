import express from "express";
import { PORT } from "./utils/index.js";
import cors from "cors";
import { uploadRouter } from "./routes/upload.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    message: "IEEE Magic 4.0 Photobooth Backend",
  });
});

app.use('/upload', uploadRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
