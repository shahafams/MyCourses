import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {loadCoursesAction} from '../../store/actions/consts.actions';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  mockData: object;
  constructor(private store: Store<{ consts: object }>) {
    this.store.select('consts').subscribe(coursers => this.mockData = coursers);
    console.log(this.mockData);
  }

  ngOnInit() {
  }

}
