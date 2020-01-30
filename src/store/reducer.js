import { DELETE_CODE, SAVE_CODE } from './types';

const initialState = {
  codeArray: [],
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case DELETE_CODE: {
      const { codeArray } = state;
      const index = action.payload;
      const updatedCodes = [...codeArray];
      updatedCodes.splice(index, 1);

      return {
        ...state,
        codeArray: updatedCodes,
      };
    }
    case SAVE_CODE: {
      const { codeArray } = state;
      const newCode = action.payload;
      const updatedCodes = [...codeArray];
      updatedCodes.push(newCode);

      return {
        ...state,
        codeArray: updatedCodes,
      };
    }
    default:
      return { ...state };
  }
}
