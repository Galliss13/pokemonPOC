import joi from "joi";

export const pokemonSchema = joi.object({
    name: joi.string().required(),
    nickname: joi.string().required(),
    type: joi.string().required(),
    level: joi.number().required()
})