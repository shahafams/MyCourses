import {Component} from '@angular/core';
import {loadCoursesAction} from '../store/actions/consts.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<object>) {
    this.store.dispatch(loadCoursesAction());
  }
}
