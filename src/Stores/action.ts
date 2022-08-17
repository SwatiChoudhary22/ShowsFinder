import { Show } from "../models";

export const SHOWS_FETCH = "SHOWS_TYPES_FETCH";
export const SHOWS_FETCHED = "SHOWS_TYPES_FETCHED";

export const showsFetchTypesAction = () => ({
  type: SHOWS_FETCH,
});
export const showsFetchedTypesSuccessAction = (shows: Show[]) => ({
  type: SHOWS_FETCHED,
  payload: shows,
});
