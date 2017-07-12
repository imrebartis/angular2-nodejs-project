import { Component } from "@angular/core";
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
                [message]="message"
                (editClicked)="message.content = $event"
                *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent {

    messages: Message[] = [
        new Message('hi', 'Bjim'), //assigning content of message thanks to @Input() used in message.component.ts
        new Message('ho', 'Bjam'),
        new Message('hey', 'Bjom')
    ];
}