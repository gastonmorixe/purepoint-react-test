export const ErrorResponse = new Error("Response error.")

export class API {
  constructor(endpoint, { fetcher, debug = true } = {}) {
    this.endpoint = endpoint
    this.fetcher = fetcher || fetch
    this.debug = debug
  }

  get = async path => {
    try {
      const response = await this.fetcher(`${this.endpoint}/${path}`)
      if (!response.ok) throw ErrorResponse
      if (this.debug) console.log("[API RESPONSE ✅]", response)
      return response
    } catch (error) {
      if (this.debug) console.error("[NETWORK ERROR 🔴]", error)
      throw error
    }
  }

  search = (query, page = 0) =>
    this.get(`api/?q=${encodeURIComponent(query)}&p=${page}&format=json`)
}

export default new API("http://www.recipepuppy.com")
