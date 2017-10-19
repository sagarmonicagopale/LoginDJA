import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/helpers/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [AuthenticationService]
})
export class HeaderComponent implements OnInit {

  constructor(private _authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    // allow user to logout
    this._authenticationService.logout();
  }

}
