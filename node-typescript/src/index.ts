import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Working");
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
