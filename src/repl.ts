export function cleanInput(input: string): string[] {
    const splitted = input.toLowerCase().split(" ") 
    return splitted.filter(Boolean)
}
