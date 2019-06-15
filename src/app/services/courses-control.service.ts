import {EventEmitter, Injectable, Output} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class CoursesControlService {
  mockData: object;

  @Output() search: EventEmitter<object> = new EventEmitter();

  constructor(private store: Store<{ consts: object }>) {
    this.store.select('consts').subscribe(coursers => this.mockData = coursers);
  }

  mockDataAfterSearch(value) {
    let filterData;
    if (value !== '') {
      let filterAsObj = {};
      filterData = Object.values(this.mockData)
        .filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      filterData.forEach(data => filterAsObj = {...filterAsObj, [data.id]: data});
    } else {
      filterData = this.mockData;
    }
    this.search.emit(filterData);
  }

}
