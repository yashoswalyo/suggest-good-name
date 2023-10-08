import express, {Express, Request, Response} from "express";
import cors from "cors";

const app: Express = express();
const port = 3001;

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method.toUpperCase()} request at ${req.url.toString()}`);
  next();
});



app.get("/api", (req: Request, res: Response) => {
  console.log("Hit on /api");
  res.status(200).json({message: "Api Reached!!"});
});

app.listen(port, "0.0.0.0", () => console.log("Sever started and running at http://127.0.0.1:3001"));
