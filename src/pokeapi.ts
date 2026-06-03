export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2/";
  private static readonly locationEndpoint = "location-area"

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}${PokeAPI.locationEndpoint}`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error (`Response status: ${response.status}`)
    }

    const result = await response.json() as ShallowLocations
    return result
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}${locationName}`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error (`Response status: ${response.status}`)
    }

    const result = await response.json() as Location
    return result
  }
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null,
  results: [
    {
        name: string,
        url: string,
    }
  ],
};

export type Location = {
  id: number,
  name: string,
  game_index: number,
  encounter_method_rates: [],
  location: {
    name: string,
    url: string,
  }
  names: [],
  pokemon_encounters: []
};
