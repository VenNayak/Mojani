import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginAuthenticationService {
  
  private isLoggedIn: boolean = false; 
  private loggedInRole : string;
  private authMessage : string;

  constructor(private http:Http){} 
    // API: POST /UserAuthentication
    public isUserAuthenticated(userInfo) : Observable<boolean>{
      console.log("Inside isUserAuthenticated function in authentication service");
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/login/api/authentication', JSON.stringify(userInfo), { headers: headers })
        .map(res => {         
          let jsonRes= res.json();
          if(jsonRes.authSuccess){
              this.isLoggedIn = true;
              this.loggedInRole = jsonRes.role;
              this.authMessage = jsonRes.message;
              return true;
          }else{
              this.isLoggedIn = false;
              this.authMessage = jsonRes.message;
              return false;
          }
        
      });     
    }
    
    isUserLoggedIn(): boolean {
		return this.isLoggedIn;
	  }

    logoutUser(): void {
		this.isLoggedIn = false;
	}

     getLoggedInRole(): string {
     return this.loggedInRole ;

    }
  
   getAuthMessage(): string {
     return this.authMessage ;

    }

}
