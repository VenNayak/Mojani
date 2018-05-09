import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginAuthenticationService } from '../services/login-authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginAuthService : LoginAuthenticationService, private router :Router) { }
  //implement canActivate Interface to check if user is already logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
     let url: string = state.url;
	   console.log('State Url:'+ url);
	if (this.loginAuthService.isUserLoggedIn()) {
		return true; 
	}
   
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
  }
}
