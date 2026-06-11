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
