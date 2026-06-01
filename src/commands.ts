import type { State } from "./state.js";

export function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!\n")
    state.readline.close()
    process.exit(0)
}

export function commandHelp(state: State): void {
    console.log("Welcome to the Pokedex!\nUsage:\n")

    for (let command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`)
    }

    console.log("")
}