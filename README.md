# ⚡ Pokedex

A TypeScript CLI Pokedex powered by [PokeAPI](https://pokeapi.co/).

This project implements an interactive REPL where users can browse Pokemon location areas, explore wild encounters, catch Pokemon, inspect caught Pokemon details, and view their personal Pokedex.

Built as a learning project to practice TypeScript, async API calls, state management, command-based CLI architecture, and lightweight caching.

---

## 🧠 Concepts Practiced

### TypeScript

* Strongly typed data models for PokeAPI responses
* `Record<string, T>` usage for command registries and local Pokedex state
* Type-only imports with `import type`
* Rest parameters with `...args`
* Modular file organization and reusable types

### Node.js CLI

* Interactive REPL-style command loop
* User input parsing and normalization
* Command registry pattern with callback functions
* Basic CLI feedback and error handling

### API & Async Programming

* Fetching data from external REST API endpoints
* `async` / `await` flow for asynchronous operations
* Response validation with `response.ok`
* Parsing JSON responses into typed objects
* Reusing API wrapper methods across commands

### Caching

* Custom cache layer using `Map`
* Generic `CacheEntry<T>` type
* Automatic cleanup loop with `setInterval`
* Cache invalidation based on entry age
* Avoiding repeated requests for previously fetched API data

### Testing

* Unit testing cache behavior with Vitest
* Testing asynchronous cleanup behavior
* Using `setTimeout` with Promises for time-based test cases
* Cleaning up timers with `stopReapLoop()`

---

## 🎮 Available Commands

| Command                  | Description                                  |
| ------------------------ | -------------------------------------------- |
| `help`                   | Displays available commands                  |
| `exit`                   | Exits the Pokedex                            |
| `map`                    | Displays the next page of location areas     |
| `mapb`                   | Displays the previous page of location areas |
| `explore <area_name>`    | Lists Pokemon available in a location area   |
| `catch <pokemon_name>`   | Attempts to catch a Pokemon                  |
| `inspect <pokemon_name>` | Displays details about a caught Pokemon      |
| `pokedex`                | Lists all caught Pokemon                     |

---

## ⚙️ Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/kravvat/pokedex.git
   ```

2. Enter the project directory:

   ```bash
   cd pokedex
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

5. Run tests:

   ```bash
   npm test
   ```

---

## 🖥️ Sample CLI Output

```txt
Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area
sunyshore-city-area
sinnoh-pokemon-league-area

Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
 - gyarados

Pokedex > catch pidgey
Throwing a Pokeball at pidgey...
pidgey was caught!

Pokedex > inspect pidgey
Name: pidgey
Height: 3
Weight: 18
Stats:
  -hp: 40
  -attack: 45
  -defense: 40
  -special-attack: 35
  -special-defense: 35
  -speed: 56
Types:
  - normal
  - flying

Pokedex > pokedex
Your Pokedex:
 - pidgey
```

---

## 🚀 Future Improvements

* Implement Node's built-in `repl` module
* Add more unit tests for commands and API wrapper behavior
* Persist the user's Pokedex to disk between sessions
* Add support for different Pokeballs with different catch rates
* Add a party system and allow caught Pokemon to level up
* Simulate simple battles between Pokemon
* Add random wild Pokemon encounters while exploring
* Improve command validation and error messages
* Refactor command files for better scalability as the project grows

---

## 📍 Status

✅ Completed learning project - The core CLI Pokedex functionality is complete.

The project currently supports browsing location areas, exploring Pokemon encounters, catching Pokemon, inspecting caught Pokemon, viewing the local Pokedex, and caching API responses.

---

## 📚 License

This project is open for educational use. Attribution appreciated if reused.

The idea and initial specification for this project come from the [Boot.dev](https://boot.dev) course *"Backend Developer Path"*.

---

## 🔗 Connect with me

* ⚔️ Boot.dev: [kravvat](https://www.boot.dev/u/kravvat)
* 💼 LinkedIn: [Kacper Stec](https://www.linkedin.com/in/kacper-stec/)
* 📫 Email: [kacperstec3d@gmail.com](mailto:kacperstec3d@gmail.com)

---

Thanks for visiting!  
Have a great day and happy coding!
