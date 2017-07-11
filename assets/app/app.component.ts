import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message: Message = new Message('hi', 'Bjim'; //assigning content of message thanks to @Input() used in message.component.ts
}