import { takeLatest, put, select } from 'redux-saga/effects';

import {
  getInitialCoordinatesSuccess,
  getInitialCoordinatesFailure,
  GET_INITIAL_COORDINATES,
  GET_INITIAL_COORDINATES_ACTION,
  getNextGenerationFailure,
  getNextGenerationSuccess,
  GET_NEXT_GENERATION,
} from 'actions/dashboardAction';

import { calculateActiveCells, convertToDataBrut, modifyCells } from 'utils/calculateActiveCells';

function* getInitialCoordinatesFunction(action: GET_INITIAL_COORDINATES_ACTION) {
  const { payload } = action;

  try {
    if (payload.length > 0) {
      const data = calculateActiveCells(payload);

      yield put(getInitialCoordinatesSuccess({ mapLength: data.mapLength, coordinates: data.fileCoordinates, dataBrut: ''}))
    } else {
      yield put(getInitialCoordinatesFailure());
    }
  } catch (e) {
    yield put(getInitialCoordinatesFailure());
  }
}

function* getNextGenerationFunction() {
  const { 
    dashboardState: { coordData },
  } = yield select();

  const coordinates = modifyCells(coordData);
  const dataBrut = `${coordData.mapLength}\n${convertToDataBrut(coordinates, coordData.mapLength)}`;

  try {
    yield put(getNextGenerationSuccess({ mapLength: coordData.mapLength, coordinates, dataBrut }));
  } catch (e) {
    yield put(getNextGenerationFailure())
  }
}

export default function* dashboardSaga() {
  yield takeLatest(GET_INITIAL_COORDINATES, getInitialCoordinatesFunction);
  yield takeLatest(GET_NEXT_GENERATION, getNextGenerationFunction);
}