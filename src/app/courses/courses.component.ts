import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  Course1 = COURSES[0];
  Course2 = COURSES[1];
  Course3 = COURSES[2];

  oncourseselected(course:Course){
    console.log("this was also clicked", course)
  }

}
