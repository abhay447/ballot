import { Injectable } from '@angular/core';


import { CookieService } from 'ngx-cookie-service';

import {  AuthServiceConfig, AuthService,GoogleLoginProvider,SocialUser } from 'angularx-social-login';

import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("672236577266-s79k884sk8t5op96qdtusp7j6n43004h.apps.googleusercontent.com")
  },

]);

const keyIsLoggedIn:string = "isLoggedIn";

export function provideConfig() {
  return config;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
    loggedIn: boolean = false;
    user: SocialUser;
    constructor(
        private authService: AuthService,
        private cookieService:CookieService,
        private router: Router,) { 
            
    }

    login(){
      console.log(this.cookieService.get(keyIsLoggedIn).length == 0)
      if(!this.cookieService.check(keyIsLoggedIn) 
        || this.cookieService.get(keyIsLoggedIn).length == 0){
          this.router.navigate(['/login'])
        this.signInWithGoogle();
      }

        this.authService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
          if(this.loggedIn){
            console.log(this.user);
            var date = new Date();
            this.cookieService.set(keyIsLoggedIn,"true",date.setHours(date.getHours() + 1));
            this.router.navigate(['/home'])
          }
        });
    }

    isLoggedIn() {
      return this.cookieService.check(keyIsLoggedIn) 
        && this.cookieService.get(keyIsLoggedIn).length == 0
        && this.loggedIn
    }

    getAuthState() {
      return this.authService.authState;
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      }  
    signOut(): void {
      this.cookieService.delete(keyIsLoggedIn);
      console.log(this.cookieService.get(keyIsLoggedIn))
      this.loggedIn = false;
      this.authService.signOut();
      this.router.navigate(['/login']);
    }
}