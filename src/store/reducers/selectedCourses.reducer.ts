import { Action } from '@ngrx/store';
import {ADD_COURSES, REMOVE_COURSES} from '../actions/selectedCourses.actions';
import {AppAction} from '../actions/actions';

export function selectedCoursesReducer(state: object = {}, action: AppAction) {
  switch (action.type) {
    case ADD_COURSES:
      return {...state, [action.payload.id]: action.payload};

    case REMOVE_COURSES:
      const {[action.payload.id]: out, ...rest } = state;
      return rest;

    default:
      return state;
  }
}
