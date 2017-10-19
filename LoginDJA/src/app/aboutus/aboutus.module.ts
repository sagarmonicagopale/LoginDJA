import { NgModule } from '@angular/core';

import { AboutusRouting } from '../aboutus/aboutus.routing';

import { AboutusComponent } from '../aboutus/aboutus.component';
import { AboutComponent } from '../aboutus/about/about.component';
import { ContactComponent } from '../aboutus/contact/contact.component';
import { ProfileComponent } from '../aboutus/profile/profile.component';
import { TeamComponent } from '../aboutus/team/team.component';
import { LayoutModule } from '../shared/layout';

@NgModule({
  imports: [
    AboutusRouting,
    LayoutModule
  ],
  declarations: [
    AboutusComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    TeamComponent
  ],
  bootstrap: [AboutusComponent]
})
export class AboutUsModule { }
