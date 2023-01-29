import prisma from "../database.js";
import { Pokemon } from "../protocols/pokemonType";

async function getAllPokemons(thereIsType?: string) {
    if (thereIsType) {
        const data = prisma.pokemons.findMany()
        return data
    } else {
        const data = prisma.pokemons.findMany()
        return data
    }
} 

async function postPokemon(pokemon: Pokemon) {
    const { name, nickname, ownerId, typeId, pokeballId, level } = pokemon;
    await prisma.pokemons.create({
        data: {
            name,
            nickname,
            ownerId,
            typeId,
            pokeballId,
            level
        }
    })
}

async function putPokemon(pokemon: Pokemon, id: number) {
    const { name, nickname, ownerId, typeId, pokeballId, level } = pokemon;
    await prisma.pokemons.update({
        where: { id },
        data: {
            name,
            nickname,
            ownerId,
            typeId,
            pokeballId,
            level
        }
    })
}

async function deletePokemon(id: number) {
    await prisma.pokemons.delete({
        where: {id}
    })
}

const pokemonRepository = {
    getAllPokemons,
    postPokemon,
    putPokemon,
    deletePokemon
}

export default pokemonRepository