import { DELETE_CODE, SAVE_CODE } from './types';

export function deleteCode(index) {
  return {
    type: DELETE_CODE,
    payload: index,
  };
}

export function saveCode(code) {
  return {
    type: SAVE_CODE,
    payload: code,
  };
}
