import {Action} from '@ngrx/store';

export interface AppAction<T = any> extends Action {
  payload: T;
}
