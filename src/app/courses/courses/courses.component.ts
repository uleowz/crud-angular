import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Course } from '../model/courses';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable <Course[]>;
  displayedColumns = ['name', 'category'];



  constructor(private coursesService: CoursesService){
    // this.courses = [];
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(tap(courses => console.log(courses)));
  }
}
