import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent {
 @Input()
course!: Course;
@Output('courseselected')
courseselected1 = new EventEmitter<Course>()


Viewcourse(){
  console.log("this was clicked")
  this.courseselected1.emit(this.course)
}
}
