import prisma from "../src/database.js";

async function main() {

    await prisma.owners.createMany({
        data: [
            {
                name: ""
            },
            {
                name: ""
            },
            {
                name: ""
            },
            {
                name: ""
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
                name: "Pikachu",
                nickname: "",
                ownerId: 1,
                typeId: 1,
                pokeballId: 1,
                level: 1
            },
            {
                name: "",
                nickname: "",
                ownerId: 1,
                typeId: 1,
                pokeballId: 1,
                level: 1
            },
            {
                name: "",
                nickname: "",
                ownerId: 1,
                typeId: 1,
                pokeballId: 1,
                level: 1
            },
            {
                name: "",
                nickname: "",
                ownerId: 1,
                typeId: 1,
                pokeballId: 1,
                level: 1
            },
            {
                name: "",
                nickname: "",
                ownerId: 1,
                typeId: 1,
                pokeballId: 1,
                level: 1
            },
            {
                name: "",
                nickname: "",
                ownerId: 1,
                typeId: 1,
                pokeballId: 1,
                level: 1
            },
            {
                name: "",
                nickname: "",
                ownerId: 1,
                typeId: 1,
                pokeballId: 1,
                level: 1
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