import type { CLICommand } from "./state.js";
import { commandExit, commandHelp } from "./commands.js"

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the Pokedex",
            callback: commandExit, 
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        }
    }
}