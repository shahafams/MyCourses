import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {
  mockData: object;

  constructor(private store: Store<{ consts: object }>) {
    this.store.select('consts').subscribe(coursers => this.mockData = coursers);
  }
}
