import {
  GET_INITIAL_COORDINATES,
  GET_INITIAL_COORDINATES_FAILURE,
  GET_INITIAL_COORDINATES_SUCCESS,
  GET_NEXT_GENERATION,
  GET_NEXT_GENERATION_SUCCESS,
  GET_NEXT_GENERATION_FAILURE,
} from 'actions/dashboardAction';

import { ActionType } from 'types/ActionsType';
import { CoordinatesContentType } from 'types/CoordinatesType';

const initialState = {
  fileData: '',
  coordData: {
    mapLength: 0,
    coordinates: [],
    dataBrut: '',
  },
};

export interface StateType {
  fileData: string;
  coordData: CoordinatesContentType;
}

export default function dashboardState(state: StateType = initialState, action: ActionType): StateType {
  switch(action.type) {
    case GET_INITIAL_COORDINATES:
      return {
        ...state,
        fileData: action.payload,
      };

    case GET_INITIAL_COORDINATES_SUCCESS:
      return {
        ...state,
        coordData: action.payload,
      };

    case GET_INITIAL_COORDINATES_FAILURE:
      return {
        ...state,
      };

    case GET_NEXT_GENERATION:
      return {
        ...state,
      };

    case GET_NEXT_GENERATION_SUCCESS:
      return {
        ...state,
        coordData: action.payload,
      };

    case GET_NEXT_GENERATION_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}