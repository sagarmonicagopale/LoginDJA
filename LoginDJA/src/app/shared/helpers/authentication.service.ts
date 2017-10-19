import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private _http: Http, private _router: Router) { }

  canActivate() {
    // Redirect to login page if user not sign in
    if (sessionStorage.getItem('isLogin') != 'true') {
      this._router.navigate(['login']);
    }

    return true;
  }

  logout() {
    // Remove user logined in data from session storage to log out user
    sessionStorage.removeItem('isLogin');
    this._router.navigate(['login']);
  }

  login(user) {
    if (user.email == 'admin@dja.com' && user.password == '123456') {
      // if login details are valid return 200 OK
      sessionStorage.setItem('isLogin', 'true');
      let responceData = {
        'code': 200,
        'status': 'success',
        'message': 'success',
        'data': []
      }
      return responceData;

    } else {
      // else return 400 bad request
      sessionStorage.setItem('isLogin', 'false');
      let responceData = {
        'code': 400,
        'status': 'failed',
        'message': 'In-valid credentials'
      }
      return responceData;
    }
  }


}
