import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private newhttp:HttpClient) { }
  viewCourse=()=>{
    return this.newhttp.get("http://mylinkurcodesapp.herokuapp.com/getcourses")
  }
   
  addCourse=(data:any)=>{
    return this.newhttp.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data)
  }
}
