import { requestBeers } from "./request-beers.js";

export const beersRepository = {
  beers: [],
  async getBeers({ name }) {
    this.beers = await requestBeers({ name });
    return this.beers;
  }
};
