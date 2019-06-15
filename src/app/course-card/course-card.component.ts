import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../entities/Card';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

}
