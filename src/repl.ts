import { createInterface } from "node:readline"
import { getCommands } from "./get_commands.js"

export function cleanInput(input: string): string[] {
    const splitted = input.toLowerCase().split(/\s+/) 
    return splitted.filter(Boolean)
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })

    rl.prompt()

    rl.on('line', async (input) => {
        const words = cleanInput(input)
        if (words.length === 0) {
            console.log("Input was empty, try again")
            rl.prompt()
            return
        }
    
        const commandName = words[0]
        const commands = getCommands()

        if (commandName in commands) {
            try {
                commands[commandName].callback(commands)
            } catch (error) {
                console.log(error)
            }
        }
        else {
            console.log("Unknown command")
        }

        rl.prompt()
    })
}