import { Component } from '@angular/core';
import { MessageService } from './messages/message.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService] //providing MessageService here will allow the child components to use it as well (providing it in each child component won't help)

})
export class AppComponent {
}