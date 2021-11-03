import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';
import { Observable, } from 'rxjs';
import { NewService } from '../new.service';
import { User } from './new.model';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newUser: User={
    user: '',
    age: 0,
    address: ''
  }

  constructor(private dataService: NewService) {
 
   }

  ngOnInit(): void {
   new Observable((observer)=>{
     setTimeout(() => {
       observer.next('1 min')
     }, 2000);
     setTimeout(() => {
       observer.next('2 min')
     }, 3000);
     setTimeout(() => {
      observer.next('3 min')
     }, 4000);
   }).subscribe((res)=>{
     console.log(res)
   })
  }
  getValues(form:NgForm){
    this.dataService.postUser(form.value).subscribe(
      success=>console.log("sucees",success),
      error=>console.log("error",error)
    )
  }
}
