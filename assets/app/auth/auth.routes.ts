import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
    // the pathMatch: 'full' below makes sure the redirect will happen only for ''
    { path: '', redirectTo: 'signup', pathMatch: 'full' }, // the LACK OF backslash in 'signup' is IMPORTANT (with / it would go to localhost/signup instead of localhost/auth/signup)!!!
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];