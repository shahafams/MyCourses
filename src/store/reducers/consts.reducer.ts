import { Action } from '@ngrx/store';
import {mockData} from '../../app/mockCourses';
import {GET_COURSES} from '../actions/consts.actions';

export function coursesReducer(state: object = {}, action: Action) {
  switch (action.type) {
    case GET_COURSES:
      return state['consts'] = mockData;

    default:
      return state;
  }
}
