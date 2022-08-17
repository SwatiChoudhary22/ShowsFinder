import { getShows } from "../API/api";
import { call, put, select, takeLatest, takeLeading } from "redux-saga/effects";
import createSagaMiddleware from "@redux-saga/core";
export const sagaMiddleware = createSagaMiddleware();
import { showsFetchedTypesSuccessAction, SHOWS_FETCH } from "./action";

export function* fetchShows(): Generator<any, any, any> {
  const data = yield call(getShows);
  yield put(showsFetchedTypesSuccessAction(data));
}

export default function* rootSaga() {
  yield takeLeading(SHOWS_FETCH, fetchShows);
}
