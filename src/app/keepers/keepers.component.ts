import {Component, OnInit} from '@angular/core';
import {fadeIn} from '../animations';
import {UserService} from '../services/user.service';
import {User} from '../models/user.model';
import {GLOBAL} from '../services/globals';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css'],
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit {
  public title;
  public keepers: User[];
  public url: string;

  constructor(
    private userService: UserService
  ) {
    this.title = 'Cuidadores';
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.getkeepers();
  }

  getkeepers() {
    this.userService.getKeepers().subscribe(res => {
      console.log(res);
      // @ts-ignore
      if (res.users) {
        // @ts-ignore
        this.keepers = res.users;
      }
    });
  }
}
