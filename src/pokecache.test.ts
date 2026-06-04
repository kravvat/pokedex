import { test, expect } from "vitest"
import { Cache } from "./pokecache.js"

test("adds and retrieves cached value", () => {
    const cache = new Cache(1000)

    cache.add("test-key", "test-value")

    const result = cache.get<string>("test-key")

    expect(result).toBe("test-value")

    cache.stopReapLoop()
})

test("returns undefined for missing key", () => {
  const cache = new Cache(1000)

  const result = cache.get<string>("missing-key")

  expect(result).toBeUndefined()

  cache.stopReapLoop()
})

test("removes stale entries after interval", async () => {
  const cache = new Cache(100)

  try {
    cache.add("old-key", "old-value")

    const cached = cache.get<string>("old-key")
    expect(cached).toBe("old-value")

    await new Promise((resolve) => setTimeout(resolve, 250))

    const reaped = cache.get<string>("old-key")
    expect(reaped).toBeUndefined()
  } finally {
    cache.stopReapLoop()
  }
})