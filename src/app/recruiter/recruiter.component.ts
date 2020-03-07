import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit {
  public isCollapsed = true;
  public recruiter_name = "";
  public recruiter_org = "";
  public recruiter_email = "";
  public profile_pic = "";

  constructor(private loginService: LoginService) {
    loginService.getAuthState().subscribe(
      (user) => {
        if(user != null){
          this.recruiter_name = user.name
          this.recruiter_org = user.email.split("@")[1]
          if(this.recruiter_org.toLowerCase() === "gmail.com"){
            this.recruiter_org = "Freelance";
          }
          this.recruiter_email = user.email;
          this.profile_pic = user.photoUrl;
        }
      }
    )
  }

  ngOnInit() {
  }
}
