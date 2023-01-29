-- CreateTable
CREATE TABLE "owners" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokeballs" (
    "id" SERIAL NOT NULL,
    "pokeball" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "pokeballs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "ownerId" INTEGER,
    "typeId" INTEGER NOT NULL,
    "pokeballId" INTEGER,
    "level" INTEGER NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "owners_name_key" ON "owners"("name");

-- CreateIndex
CREATE UNIQUE INDEX "types_type_key" ON "types"("type");

-- AddForeignKey
ALTER TABLE "pokemons" ADD CONSTRAINT "pokemons_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pokemons" ADD CONSTRAINT "pokemons_pokeballId_fkey" FOREIGN KEY ("pokeballId") REFERENCES "pokeballs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pokemons" ADD CONSTRAINT "pokemons_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
