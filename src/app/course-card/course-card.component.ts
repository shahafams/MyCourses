import {Component, Input} from '@angular/core';
import {Card} from '../entities/Card';
import {Store} from '@ngrx/store';
import {addCourseAction, removeCourseAction} from '../../store/actions/counter.actions';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() card: Card;
  addDisable = true;

  constructor(private store: Store<object>) {
  }

  toggleAddDisable() {
    this.addDisable ? this.store.dispatch(addCourseAction()) : this.store.dispatch(removeCourseAction());
    this.addDisable = !this.addDisable;
  }

}
