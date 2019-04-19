import { Component } from '@angular/core';
import {User} from "./models/user.model";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public userId: number = 1;

  public user: User;

  public users: User[];

  constructor(private userService: UserService) {
  }

  public getUser() {
    this.userService.getUser(this.userId).subscribe(user => this.user = user);
  }

  public getAllUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }
}
