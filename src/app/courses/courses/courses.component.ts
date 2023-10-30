import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];



  constructor(private coursesService: CoursesService){
    // this.courses = [];
    // this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }
}
