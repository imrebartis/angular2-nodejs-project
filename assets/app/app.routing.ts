import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    // the pathMatch: 'full' below makes sure the redirect will happen only for ''
    { path: '', redirectTo: '/messages', pathMatch: 'full' }, // the backslash in '/messages' is IMPORTANT!!!
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES } // the children registers the routes in auth.routes as child routes of the 'auth' path
];
//the routing const below has to be imported in app.module
export const routing = RouterModule.forRoot(APP_ROUTES);