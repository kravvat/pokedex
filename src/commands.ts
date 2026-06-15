import type { State } from "./state.js";

export async function commandExit(state: State): Promise<void> {
    console.log("Closing the Pokedex... Goodbye!")
    state.readline.close()
    process.exit(0)
}

export async function commandHelp(state: State): Promise<void> {
    console.log("Welcome to the Pokedex!\nUsage:\n")

    for (let command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`)
    }

    console.log("")
}

export async function commandMap(state: State): Promise<void> {
    const response = await state.pokeapi.fetchLocations(state.nextLocationsURL ?? undefined)

    for (const result of response.results) {
        console.log(`${result.name}`)
    }

    state.nextLocationsURL = response.next
    state.prevLocationsURL = response.previous
}

export async function commandMapB(state: State): Promise<void> {
    if (state.prevLocationsURL === null) {
        console.log("You're on the first page")
        return
    }

    const response = await state.pokeapi.fetchLocations(state.prevLocationsURL)

    for (const result of response.results) {
        console.log(`${result.name}`)
    }

    state.nextLocationsURL = response.next
    state.prevLocationsURL = response.previous
}

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    const locationName = args[0]

    if (!locationName) {
        console.log("Please provide a location area name")
        return
    }

    console.log(`Exploring ${locationName}...`)

    const location = await state.pokeapi.fetchLocation(locationName)

    console.log("Found Pokemon:")

    for (const encounter of location.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`)
    }
}

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    const pokemonName = args[0]

    if (!pokemonName) {
        console.log("Please provide a Pokemon name")
        return
    }

    console.log(`Throwing a Pokeball at ${pokemonName}...`)

    const pokemon = await state.pokeapi.fetchPokemon(pokemonName)

    const difficultyRoll= Math.random() * pokemon.base_experience

    if (difficultyRoll > 37) {
        console.log(`${pokemon.name} escaped!`)
        return
    }
    
    console.log(`${pokemon.name} was caught!`)

    state.pokedex[pokemon.name] = pokemon
}

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    const pokemonName = args[0]

    if (!pokemonName) {
        console.log("Please provide a Pokemon name")
        return
    }

    console.log(`Inspecting ${pokemonName}...`)

    const pokemon = state.pokedex[pokemonName]

    if (!pokemon) {
        console.log(`You have not yet caught ${pokemonName}\nTry using: catch ${pokemonName}`)
        return
    }

    const statLines = pokemon.stats.map((stat) => {
        return ` - ${stat.stat.name}: ${stat.base_stat}`
    })

    const typeLines = pokemon.types.map((type) => {
        return ` - ${type.type.name}`
    })

    const lines = [
        `Name: ${pokemon.name}`,
        `Height: ${pokemon.height}`,
        `Weight: ${pokemon.weight}`,
        "Stats:",
        ...statLines,
        "Types:",
        ...typeLines,
    ]

    console.log(lines.join("\n"))
}

export async function commandPokedex(state: State, ...args: string[]): Promise <void> {
    if (Object.keys(state.pokedex).length === 0) {
        console.log("You have not caught any Pokemon yet\nTry using: catch <POKEMON_NAME>")
        return
    }

    console.log("Your Pokedex:")

    for (const pokemon in state.pokedex) {
        console.log(` - ${state.pokedex[pokemon].name}`)
    }
}
