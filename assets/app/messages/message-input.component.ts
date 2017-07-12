import { Component } from "@angular/core";
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: 'message-input.component.html',
    providers: [
        MessageService //providers lets us use this service only in this component, see class below
    ]
})

export class MessageInputComponent {

    constructor (private messageService: MessageService) {

    }
    onSave(value: string) {
        const message = new Message(value, 'Bjim');
        this.messageService.addMessage(message);
    }
}