import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRouting } from './app.routes';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout';

import { AboutUsModule } from './aboutus/aboutus.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';

import { AuthenticationService } from './shared/helpers/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    RouterModule,
    AboutUsModule,
    LayoutModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
