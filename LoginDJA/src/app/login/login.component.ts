import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/helpers/authentication.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  isError = false;
  alertStatus: string;
  alertMsg: string;

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {

  }

  ngOnInit() {
    // Reset login status
    this._authenticationService.logout();
  }

  login(user) {
    let result = this._authenticationService.login(user);

    if (result.code != 200 && result.status != 'success') {
      // logged in failed
      sessionStorage.setItem('isLogin', 'false');

      this.isError = true;
      this.alertStatus = "danger";
      this.alertMsg = result.message;
      setTimeout(() => {
        this.isError = false;
      }, 3000);
    } else {
      // logged in success & redirect to home page
      sessionStorage.setItem('isLogin', 'true');
      this._router.navigate(['home']);
    }
    console.log(result);
  }
}
