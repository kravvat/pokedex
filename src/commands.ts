import type { CLICommand } from "./get_commands.js";

export function commandExit() {
    console.log("Closing the Pokedex... Goodbye!")
    process.exit(0)
}

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!\nUsage:\n\n")

    for (let command of Object.values(commands)) {
        console.log(`${command.name}: ${command.description}`)
    }
}