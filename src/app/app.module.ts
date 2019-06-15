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
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {CourseCardComponent} from './course-card/course-card.component';
import {ListCardsComponent} from './list-cards/list-cards.component';
import {selectedCoursesReducer} from '../store/reducers/selectedCourses.reducer';
import {coursesReducer} from '../store/reducers/courses.reducer';
import { YourCartComponent } from './your-cart/your-cart.component';
import { SearchCourseComponent } from './search-course/search-course.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    CourseCardComponent,
    ListCardsComponent,
    YourCartComponent,
    SearchCourseComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
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
