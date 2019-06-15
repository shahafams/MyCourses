import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent implements OnInit {
  counter = 0;

  constructor(private store: Store<{ selectedCourses: object }>) {
  }

  ngOnInit() {
    this.store.select('selectedCourses')
      .subscribe(counter => this.counter = Object.keys(counter).length);
  }

}
