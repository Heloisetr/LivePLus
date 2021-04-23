import { CoordinatesContentType } from "types/CoordinatesType";

export type Action =
  | GET_INITIAL_COORDINATES_ACTION
  | GET_INITIAL_COORDINATES_SUCCESS_ACTION
  | GET_INITIAL_COORDINATES_FAILURE_ACTION
  | GET_NEXT_GENERATION_ACTION
  | GET_NEXT_GENERATION_SUCCESS_ACTION
  | GET_NEXT_GENERATION_FAILURE_ACTION;

export const GET_INITIAL_COORDINATES = 'GET_INITIAL_COORDINATES';
export const getInitialCoordinates = (fileData: string): GET_INITIAL_COORDINATES_ACTION => ({
  type: GET_INITIAL_COORDINATES,
  payload: fileData,
});

export const GET_INITIAL_COORDINATES_SUCCESS = 'GET_INITIAL_COORDINATES_SUCCESS';
export const getInitialCoordinatesSuccess = (coordData: CoordinatesContentType): GET_INITIAL_COORDINATES_SUCCESS_ACTION => ({
  type: GET_INITIAL_COORDINATES_SUCCESS,
  payload: coordData,
});

export const GET_INITIAL_COORDINATES_FAILURE = 'GET_INITIAL_COORDINATES_FAILURE';
export const getInitialCoordinatesFailure = (): GET_INITIAL_COORDINATES_FAILURE_ACTION => ({
  type: GET_INITIAL_COORDINATES_FAILURE,
});

export const GET_NEXT_GENERATION = 'GET_NEXT_GENERATION';
export const getNextGeneration = (): GET_NEXT_GENERATION_ACTION => ({
  type: GET_NEXT_GENERATION,
});

export const GET_NEXT_GENERATION_SUCCESS = 'GET_NEXT_GENERATION_SUCCESS';
export const getNextGenerationSuccess = (coordData: CoordinatesContentType): GET_NEXT_GENERATION_SUCCESS_ACTION => ({
  type: GET_NEXT_GENERATION_SUCCESS,
  payload: coordData,
});

export const GET_NEXT_GENERATION_FAILURE = 'GET_NEXT_GENERATION_FAILURE';
export const getNextGenerationFailure = (): GET_NEXT_GENERATION_FAILURE_ACTION => ({
  type: GET_NEXT_GENERATION_FAILURE,
});

export interface GET_INITIAL_COORDINATES_ACTION {
  type: typeof GET_INITIAL_COORDINATES;
  payload: string;
}

export interface GET_INITIAL_COORDINATES_SUCCESS_ACTION {
  type: typeof GET_INITIAL_COORDINATES_SUCCESS;
  payload: CoordinatesContentType;
}

export interface GET_INITIAL_COORDINATES_FAILURE_ACTION {
  type: typeof GET_INITIAL_COORDINATES_FAILURE;
}

export interface GET_NEXT_GENERATION_ACTION {
  type: typeof GET_NEXT_GENERATION;
}

export interface GET_NEXT_GENERATION_SUCCESS_ACTION {
  type: typeof GET_NEXT_GENERATION_SUCCESS;
  payload: CoordinatesContentType;
}

export interface GET_NEXT_GENERATION_FAILURE_ACTION {
  type: typeof GET_NEXT_GENERATION_FAILURE;
}