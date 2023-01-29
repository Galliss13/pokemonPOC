import { Request, Response, Router } from "express";
import pokemonController from "../controllers/pokemon-controller.js";
import pokemonMiddleware from "../middlewares/pokemon-middleware.js";

const pokemonRouter = Router()

pokemonRouter
    .get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK!");
    })
    .get('/pokemons', pokemonController.getAllPokemons)
    .post('/pokemon', pokemonMiddleware.schemaValidation, pokemonController.postPokemon)
    .put('/pokemon/:id', pokemonMiddleware.schemaValidation, pokemonController.putPokemon)
    .delete('/pokemon/:id', pokemonController.deletePokemon)

export default pokemonRouter
