import { Injectable } from '@angular/core';
import { Course } from '../model/courses';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[]{
    return [
      {_id: '1', name: 'Angular', category: 'front-end'}
    ]
  }
}
