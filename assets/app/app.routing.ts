import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';

const APP_ROUTES: Routes = [
    // the pathMatch: 'full' below makes sure the redirect will happen only for ''
    { path: '', redirectTo: '/messages', pathMatch: 'full' }, // the backslash in '/messages' is IMPORTANT!!!
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent }
]

//the routing const below has to be imported in app.module
export const routing = RouterModule.forRoot(APP_ROUTES); //registering routes in the Angular RouterModule for our app