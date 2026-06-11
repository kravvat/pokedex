import { getCommands } from "./get_commands.js"
import { createInterface, type Interface } from "node:readline"
import { PokeAPI, type Pokemon } from "./pokeapi.js"

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
    pokeapi: PokeAPI,
    nextLocationsURL: string | null,
    prevLocationsURL: string | null,
    pokedex: Record<string, Pokemon>,
}

export type CLICommand = {
    name: string,
    description: string,
    callback: (state: State, ...args: string[]) => Promise<void>,
}

export function initState (): State {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })

        const commands = getCommands()
        const pokeapi = new PokeAPI
        const nextLocationsURL = null
        const prevLocationsURL = null
        const pokedex = {}

        return {
            readline,
            commands,
            pokeapi,
            nextLocationsURL,
            prevLocationsURL,
            pokedex,
        }
}