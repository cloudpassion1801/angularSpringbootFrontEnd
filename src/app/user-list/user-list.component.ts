import { Component, OnInit } from '@angular/core';
import { User } from '../../app/user';
import { UserServiceService } from '../../app/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
 
  constructor(private userService: UserServiceService) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
