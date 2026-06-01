import { getCommands } from "./get_commands.js"
import { createInterface, type Interface } from "node:readline"

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
}

export type CLICommand = {
    name: string,
    description: string,
    callback: (state: State) => void,
}

export function initState (): State {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })

        const commands = getCommands()
        
        return {
            readline,
            commands,
        }
}