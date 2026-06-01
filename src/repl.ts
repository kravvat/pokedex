import type { State } from "./state.js"
import { getCommands } from "./get_commands.js"
import { createInterface } from "node:readline"

export function cleanInput(input: string): string[] {
    const splitted = input.toLowerCase().split(/\s+/) 
    return splitted.filter(Boolean)
}

export function startREPL(state: State) {
    state.readline.prompt()

    state.readline.on('line', async (input) => {
        const words = cleanInput(input)
        if (words.length === 0) {
            console.log("Input was empty, try again\n")
            state.readline.prompt()
            return
        }
    
        const commandName = words[0]

        if (commandName in state.commands) {
            try {
                state.commands[commandName].callback(state)
            } catch (error) {
                console.log(error)
            }
        }
        else {
            console.log("Unknown command\n")
        }

        state.readline.prompt()
    })
}