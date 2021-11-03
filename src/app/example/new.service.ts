import { Injectable } from '@angular/core';
import { Observable, observable,of } from 'rxjs';
import { User } from './new/new.model';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http:HttpClient) { }

  postUser(user:User):Observable<User>{
    console.log(user)
    
    return this.http.post<any>(`localhost:3000`, user);

  }
}
