import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  //step 1 render courses in a list
  //step 2 select a course
  //step 3 render selected course
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 13 HARDEST',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 3,
      title: 'Angular 13 EASTIEST',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse = null;

  selectCourse(course){
    this.selectedCourse = course;
  }

  deleteCourse(courseId){
    console.log("DELETE ", courseId);

  }

}
