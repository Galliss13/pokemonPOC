import express, { Request, Response, json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pokemonSchema } from "./models.js"
import { db } from "./database.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

type Pokemon = {
  name: string;
  nickname: null | string;
  type: string;
  level: number;
};

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK!");
});

app.post("/pokemon", async (req: Request, res: Response) => {
  const pokemon = req.body as Pokemon;
  const { name, nickname, type, level } = pokemon;
  try {
    const { error } = pokemonSchema.validate(pokemon, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }

    await db.query(
      `INSERT INTO pokemons (name, nickname, type, level) VALUES ($1, $2, $3, $4)`,
      [name, nickname, type, level]
    );
    res.sendStatus(201)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/pokemons", async (req: Request, res: Response) => {
    const thereIsType = req.query.type as string
    let pokemons
  try {
    if (thereIsType) {
        pokemons = await db.query(`SELECT * FROM pokemons WHERE type=$1`, [thereIsType]);
    } else {
        pokemons = await db.query(`SELECT * FROM pokemons`);
    }
    res.status(200).send(pokemons.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/pokemon/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const pokemon = req.body as Pokemon;
  const { name, nickname, type, level } = pokemon;

  try {
    const { error } = pokemonSchema.validate(pokemon, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }

    await db.query(
      `UPDATE pokemons SET name=$1, nickname=$2, type=$3, level=$4 WHERE id=$5`,
      [name, nickname, type, level, id]
    );
    res.sendStatus(202)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/pokemon/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await db.query(`DELETE FROM pokemons WHERE id=$1`, [id]);
    res.sendStatus(204)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running in port ${port}`));
