import type { CLICommand } from "./state.js";
import { commandExit, commandHelp, commandMap, commandMapB } from "./commands.js"

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
        },
        map: {
            name: "map",
            description: "Displays the next 20 location areas",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 location areas",
            callback: commandMapB,
        },
    }
}