import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  
  
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  readValue=()=>{
    let data={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseDuration":this.courseDuration,
      "courseDate":this.courseDate,
      "courseVenue": this.courseVenue
    }
   console.log(data)
   this.myapi.addCourse(data).subscribe(
    (response)=>{
      console.log(response)
      alert("Succesfully added")
    }
   )
  }

  ngOnInit(): void {
  }

}
