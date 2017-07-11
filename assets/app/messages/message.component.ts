import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';

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
    @Input() message: Message //message: Message makes sure messages will have the structure specified in message.model.ts
    @Output() editClicked = new EventEmitter<string>();

    onEdit(){
        this.editClicked.emit('a new value'); //emitting a new event
    }
    
}