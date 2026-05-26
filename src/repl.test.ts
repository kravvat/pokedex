import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe("cleanInput", () => {
    const cases = [
    {
        input: "hello   world",
        expected: ["hello", "world"],
    },
    {
        input: "HELLO WORLD",
        expected: ["hello", "world"],
    },
    {
        input: "   hello world   ",
        expected: ["hello", "world"],
    },
    {
        input: "Pikachu",
        expected: ["pikachu"],
    },
    {
        input: "",
        expected: [],
    },
    {
        input: "     ",
        expected: [],
    },
    ]

    test.each(cases)("cleans and splits '$input'", ({ input, expected }) => {
        const actual = cleanInput(input)
        expect(actual).toEqual(expected)
    })    
})

