import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent implements OnInit {
  counter = 0;

  constructor(private store: Store<{ counter: number }>) {
  }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

}
