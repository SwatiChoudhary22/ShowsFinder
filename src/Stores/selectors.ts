import { AppState } from "../Stores/store";

export const petTypesSelector = (s: AppState) => s.petTypes;
export const showsTypesSelector = (s: AppState) => s.shows;
