import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isCollapsed = true;
  public recruiter_name = "";
  public recruiter_org = "";
  public profile_pic = "";

  constructor(private loginService: LoginService) {
    loginService.login().subscribe(
      (user) => {
        if(user != null){
          this.recruiter_name = user.name
          this.recruiter_org = user.email.split("@")[1]
          this.profile_pic = user.photoUrl;
        }
      }
    )
  }

  ngOnInit() {
  }
}
