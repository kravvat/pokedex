import type { State } from "./state.js"

export function cleanInput(input: string): string[] {
    const splitted = input.toLowerCase().split(/\s+/) 
    return splitted.filter(Boolean)
}

export async function startREPL(state: State) {
    state.readline.prompt()

    state.readline.on('line', async (input) => {
        const words = cleanInput(input)
        if (words.length === 0) {
            console.log("Input was empty, try again\n")
            state.readline.prompt()
            return
        }
    
        const commandName = words[0]
        const command = state.commands[commandName]

        if (!command) {
            console.log("Unknown command\n")
            state.readline.prompt()
            return
        }

        try {
            await command.callback(state)
        } catch (error) {
            console.log(error)
        }

        state.readline.prompt()
    })
}
