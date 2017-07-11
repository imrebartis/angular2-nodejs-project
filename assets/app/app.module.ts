import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // ngModel in the html needs this

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule, FormsModule], // ngModel in the html needs FormsModule
    bootstrap: [AppComponent]
})
export class AppModule {

}