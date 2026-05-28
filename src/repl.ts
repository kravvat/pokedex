import { createInterface } from "node:readline"

export function cleanInput(input: string): string[] {
    const splitted = input.toLowerCase().split(" ") 
    return splitted.filter(Boolean)
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })

    rl.prompt()

    rl.on('line', (input) => {
        const words = cleanInput(input)
        if (!words) {
            rl.prompt()
            return
        }
        console.log(`Your command was: ${words[0]}`)
        rl.prompt()
    })
}