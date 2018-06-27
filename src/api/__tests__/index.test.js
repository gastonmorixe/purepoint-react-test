import { default as AppAPI, API } from "../"

test("API accepts and sets endpoint as first argument", () => {
  const endpoint = "http://fake.com"
  const myApiInstance = new API(endpoint)
  expect(myApiInstance.endpoint).toBe(endpoint)
})

test("Default Export is an instance of API", () => {
  expect(AppAPI).toBeInstanceOf(API)
})

test("Default Export has endpoint", () => {
  expect(AppAPI.endpoint.length).toBeGreaterThan(3)
})

test("Search accepts custom fetcher and resolves", () => {
  const endpoint = "http://fake.com"
  const fakeResponse = { data: "ok", ok: true }
  const fakeFetcherSuccess = url => Promise.resolve(fakeResponse)
  const myApiInstance = new API(endpoint, {
    fetcher: fakeFetcherSuccess,
    debug: false
  })
  expect.assertions(1)
  return myApiInstance.search("test").then(response => {
    expect(response).toBe(fakeResponse)
  })
})

test("Search accepts custom fetcher and fails", () => {
  const endpoint = "http://fake.com"
  const fakeResponse = null
  const fakeNetworkError = new Error("Fake Network Error")
  const fakeFetcherFails = url => Promise.reject(fakeNetworkError)
  const myApiInstance = new API(endpoint, {
    fetcher: fakeFetcherFails,
    debug: false
  })
  expect.assertions(1)
  return myApiInstance.search("test").catch(e => {
    expect(e).toBe(fakeNetworkError)
  })
})
