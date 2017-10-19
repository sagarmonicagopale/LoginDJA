import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent      
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
      RouterModule
  ]
})
export class LayoutModule { }
