import { Pokemon } from "../protocols/pokemonType.js";
import pokemonRepository from "../repositories/pokemon-repository.js";

async function getAllPokemons(thereIsType: string) {
    const pokemons = await pokemonRepository.getAllPokemons(thereIsType)
    return pokemons
} 

async function postPokemon(pokemon: Pokemon) {
    await pokemonRepository.postPokemon(pokemon)
}

async function putPokemon(pokemon: Pokemon, id: number) {
    await pokemonRepository.putPokemon(pokemon, id)
}

async function deletePokemon(id: number) {
    await pokemonRepository.deletePokemon(id)
}

const pokemonService = {
    getAllPokemons,
    postPokemon,
    putPokemon,
    deletePokemon
}

export default pokemonService