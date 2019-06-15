import {EventEmitter, Injectable, Output} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class CoursesControlService {
  mockData: object;
  filterData;
  @Output() search: EventEmitter<object> = new EventEmitter();

  constructor(private store: Store<{ consts: object }>) {
    this.store.select('consts').subscribe(coursers => this.mockData = coursers);
  }

  mockDataAfterSearch(value) {
    if (value !== '') {
      let filterAsObj = {};
      this.filterData = Object.values(this.mockData)
        .filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      this.filterData.forEach(data => filterAsObj = {...filterAsObj, [data.id]: data});
    } else {
      this.filterData = this.mockData;
    }
    this.search.emit(this.filterData);
  }

  sortBy(value) {
    if (value !== 'default') {
      let filterAsObj = {};
        this.filterData = Object.values(this.filterData ? this.filterData : this.mockData)
          .sort((a, b) => {
            if (value === 'price') {
              return a[value] - b[value];
            } else {
              if ( a[value] < b[value] ) {
                  return -1;
                }
                if ( a[value] > b[value] ) {
                  return 1;
                }
                return 0;
            }
          });

        this.filterData.forEach(data => filterAsObj = {...filterAsObj, [data.id]: data});
    } else {
      this.filterData = this.mockData;
    }
    this.search.emit(this.filterData);
  }
}
