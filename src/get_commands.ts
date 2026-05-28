import { commandExit, commandHelp } from "./commands.js"

export type CLICommand = {
    name: string,
    description: string,
    callback: (commands: Record<string, CLICommand>) => void,
}

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