import { Request, Response } from "express";
import { pokemonSchema } from "../models.js";
import { Pokemon } from "../protocols/pokemonType.js";
import pokemonService from "../services/pokemon-service.js";

async function getAllPokemons(req: Request, res: Response) {
  const thereIsType = req.query.type as string;
  try {
    const pokemons = await pokemonService.getAllPokemons(thereIsType)
    res.status(200).send(pokemons);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function postPokemon(req: Request, res: Response) {
  const pokemon = req.body as Pokemon;
  try {
    const { error } = pokemonSchema.validate(pokemon, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }

    await pokemonService.postPokemon(pokemon)

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function putPokemon(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const pokemon = req.body as Pokemon;

  try {
    const { error } = pokemonSchema.validate(pokemon, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }

    await pokemonService.putPokemon(pokemon, id)

    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function deletePokemon(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    
    await pokemonService.deletePokemon(id)

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

const pokemonController = {
  getAllPokemons,
  postPokemon,
  putPokemon,
  deletePokemon,
};

export default pokemonController;
