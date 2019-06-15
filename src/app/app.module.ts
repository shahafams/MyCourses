import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {AppTopBarComponent} from './app-top-bar/app-top-bar.component';

import {
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';
import {CourseCardComponent} from './course-card/course-card.component';
import {ListCardsComponent} from './list-cards/list-cards.component';
import {counterReducer} from '../store/reducers/counter.reducer';
import {coursesReducer} from '../store/reducers/courses.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    CourseCardComponent,
    ListCardsComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forRoot({
      consts: coursesReducer,
      counter: counterReducer,
    })
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
