import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {AppTopBarComponent} from './app-top-bar/app-top-bar.component';

import {
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
} from '@angular/material';
import {CourseCardComponent} from './course-card/course-card.component';
import {ListCardsComponent} from './list-cards/list-cards.component';
import {selectedCoursesReducer} from '../store/reducers/selectedCourses.reducer';
import {coursesReducer} from '../store/reducers/courses.reducer';
import { YourCartComponent } from './your-cart/your-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    CourseCardComponent,
    ListCardsComponent,
    YourCartComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    StoreModule.forRoot({
      consts: coursesReducer,
      selectedCourses: selectedCoursesReducer,
    })
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
