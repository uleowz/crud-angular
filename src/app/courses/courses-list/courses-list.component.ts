import { Component, Input } from '@angular/core';
import { Course } from '../model/courses';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: Course[] = []; // @input() é o que vai entrar neste componente.

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute){}


  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
