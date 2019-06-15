import { Action } from '@ngrx/store';
import {ADD_COURSES, REMOVE_COURSES} from '../actions/counter.actions';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case ADD_COURSES:
      return state + 1;

    case REMOVE_COURSES:
      return state - 1;

    default:
      return state;
  }
}
