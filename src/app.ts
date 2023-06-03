import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

//parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});

export default app;
