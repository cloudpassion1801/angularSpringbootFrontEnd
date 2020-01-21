import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/user';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserServiceService {

  private usersUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('user:users')
    })
  };
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://angularbackendservice/users';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl,this.httpOptions);
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

}
