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