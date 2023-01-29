import prisma from "../src/database.js";

async function main() {

    await prisma.owners.createMany({
        data: [
            {
                name: "Misty"
            },
            {
                name: "Serena"
            },
            {
                name: "Ash"
            },
            {
                name: "Goh"
            },
            {
                name: "Brock"
            },
        ]
    })

    await prisma.pokeballs.createMany({
        data: [
            {
                pokeball:'Pokeball',
                price: 100
            },
            {
                pokeball:'Greatball',
                price: 200
            },
            {
                pokeball:'Ultraball',
                price: 300
            },
            {
                pokeball:'Masterball',
                price: 400
            },
        ]
    })

    await prisma.types.createMany({
        data: [
            {
                type:'Normal'
            },
            {
                type:'Fire'
            },
            {
                type:'Water'
            },
            {
                type:'Grass'
            },
            {
                type:'Flying'
            },
            {
                type:'Fighting'
            },
            {
                type:'Poison'
            },
            {
                type:'Electric'
            },
            {
                type:'Ground'
            },
            {
                type:'Rock'
            },
            {
                type:'Psychic'
            },
            {
                type:'Ice'
            },
            {
                type:'Bug'
            },
            {
                type:'Ghost'
            },
            {
                type:'Steel'
            },
            {
                type:'Dragon'
            },
            {
                type:'Dark'
            },
            {
                type:'Fairy'
            },

        ]
    })


    await prisma.pokemons.createMany({
        data: [
            {
                name: "Goldeen",
                nickname: "peixe",
                ownerId: 1,
                typeId: 3,
                pokeballId: 1,
                level: 12
            },
            {
                name: "Staryu",
                nickname: "",
                ownerId: 1,
                typeId: 3,
                pokeballId: 2,
                level: 16
            },
            {
                name: "Psyduck",
                nickname: "",
                ownerId: 1,
                typeId: 3,
                pokeballId: 1,
                level: 30
            },
            {
                name: "Gyarados",
                nickname: "",
                ownerId: 1,
                typeId: 5,
                pokeballId: 4,
                level: 42
            },
            {
                name: "Braixen",
                nickname: "",
                ownerId: 2,
                typeId: 2,
                pokeballId: 1,
                level: 50
            },
            {
                name: "Pancham",
                nickname: "",
                ownerId: 2,
                typeId: 6,
                pokeballId: 2,
                level: 7
            },
            {
                name: "Sylveon",
                nickname: "",
                ownerId: 2,
                typeId: 18,
                pokeballId: 3,
                level: 31
            },
            {
                name: "Pikachu",
                nickname: "",
                ownerId: 3,
                typeId: 8,
                level: 86
            },
            {
                name: "Cinderace",
                nickname: "",
                ownerId: 4,
                typeId: 2,
                pokeballId: 4,
                level: 70
            },
            {
                name: "Sobbie",
                nickname: "",
                ownerId: 4,
                typeId: 3,
                pokeballId: 1,
                level: 2
            },
            {
                name: "Onix",
                nickname: "",
                ownerId: 5,
                typeId: 10,
                pokeballId: 2,
                level: 65
            },
            {
                name: "Geodude",
                nickname: "Dude",
                ownerId: 5,
                typeId: 11,
                pokeballId: 1,
                level: 16
            },
            {
                name: "Zubat",
                nickname: "Zuzu",
                ownerId: 5,
                typeId: 7,
                pokeballId: 3,
                level: 11
            },
        ]
    })


}

main()
    .then(() => {
        console.log("Registro feito com sucesso!")
    })
    .catch(e => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {await prisma.$disconnect();})