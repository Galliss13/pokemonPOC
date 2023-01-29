import { Request, Response, NextFunction } from "express";
import { Pokemon } from "../protocols/pokemonType.js";
import { pokemonSchema } from "../models.js";

function schemaValidation(req: Request, res: Response, next: NextFunction) {
  const pokemon = req.body as Pokemon;
  const { error } = pokemonSchema.validate(pokemon, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  next();
}

const pokemonMiddleware = {
  schemaValidation
}

export default pokemonMiddleware