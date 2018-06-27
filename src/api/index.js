import unfetch from "unfetch"
export const ErrorResponse = new Error("Response error.")

export class API {
  constructor(endpoint, { fetcher, debug } = {}) {
    this.endpoint = endpoint
    this.fetcher = fetcher || unfetch
    this.debug = debug
  }

  get = async path => {
    try {
      const response = await this.fetcher(`${this.endpoint}/${path}`, {
        // credentials: "include"
        mode: "cors"
      })
      if (!response.ok) throw ErrorResponse
      if (this.debug) console.log("[API RESPONSE ✅]", response)
      return response
    } catch (error) {
      if (this.debug) console.error("[NETWORK ERROR 🔴]", error)
      throw error
    }
  }

  search = (query, page = 1) =>
    this.get(`api/?q=${encodeURIComponent(query)}&p=${page}&format=json`)
}

export default new API(
  "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com",
  {
    debug: true
  }
)
