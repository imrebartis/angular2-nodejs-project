import { Component, Input } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent {
    // @Input makes message assignable from the outside, i.e. from app.component.html
    @Input() message: Message; //message: Message makes sure messages will have the structure specified in message.model.ts

    color = '#BADA55';

    constructor(private messageService: MessageService) {} //injecting messageServices in order to make onDelete() work

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }
}