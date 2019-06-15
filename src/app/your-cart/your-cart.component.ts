import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent implements OnInit {
  selectedCourses = {};
  sumPrice = 0;

  constructor(private store: Store<{ selectedCourses: object }>) {
  }

  ngOnInit() {
    this.store.select('selectedCourses')
      .subscribe(selectedCourses => {
        this.selectedCourses = selectedCourses;
        this.sumPrice = 0;
        Object.values(selectedCourses).forEach(course => {
          this.sumPrice += course.price;
        });
      });
  }

}
