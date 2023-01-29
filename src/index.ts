import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import pokemonRouter from "./routes/pokemon-routes.js";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(pokemonRouter)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running in port ${port}`));
