import axios from "axios";
import { Show } from "../models";

export const getShows = async () => {
  const response = await axios.get("https://api.tvmaze.com/search/shows?q=game");
  return response.data.map((d: any) => d.show);
};
