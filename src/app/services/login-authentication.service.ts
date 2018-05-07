import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginAuthenticationService {

  constructor(private http:Http) { }
    // API: POST /landRecords/landRecord
    public authenticateUserLogin(userInfo){
      console.log("Inside authenticateUserLogin function in authentication service");
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/login/api/authentication', JSON.stringify(userInfo), { headers: headers })
        .map(res => res.json());     
    }

}
