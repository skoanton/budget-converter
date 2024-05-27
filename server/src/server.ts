
import express from "express";
import apiRouter from "./routes";
const app = express();
const port = 8801;
app.listen(port, () => {
    console.log("Server running on port:",port);
})

app.use(express.json());
app.use("/api",apiRouter);