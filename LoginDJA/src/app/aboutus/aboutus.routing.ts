import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationService } from '../shared/helpers/authentication.service';

const aboutusRoutes: Routes = [
    {
        path: 'aboutus', component: AboutusComponent,
        children: [
            { path: '', redirectTo: 'about', pathMatch: 'full' },
            { path: 'about', component: AboutComponent, canActivate: [AuthenticationService] },
            { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService] },
            { path: 'team', component: TeamComponent, canActivate: [AuthenticationService] },
            { path: 'contact', component: ContactComponent, canActivate: [AuthenticationService] }
        ]
    }
];

export const AboutusRouting = RouterModule.forChild(aboutusRoutes);
