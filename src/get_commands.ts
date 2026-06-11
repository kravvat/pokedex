import type { CLICommand } from "./state.js";
import { commandExit, commandHelp, commandMap, commandMapB, commandExplore, commandCatch, commandInspect} from "./commands.js"

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
        explore: {
            name: "explore",
            description: "Lists Pokemon in a location area",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Attempts to catch a Pokemon",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Displays information about the Pokemon",
            callback: commandInspect
        },
    }
}