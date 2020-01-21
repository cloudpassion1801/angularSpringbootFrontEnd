import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/user';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('user:user')
  })
};
@Injectable()
export class UserServiceService {

  private usersUrl: string;

 
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://angularbackendservice/users';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl,httpOptions);
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

}
