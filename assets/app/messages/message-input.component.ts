import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent implements OnInit {

    message: Message;

    constructor (private messageService: MessageService) {

    }
    onSubmit(form: NgForm) { //the type is NgForm, but in html it's ngForm
       if (this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        } else {
            // Create
            const message = new Message(form.value.content, 'Bjim');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        form.resetForm(); //this clears the input field after clicking save
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message//setting the message as message that was passed thru eventEmitter
        );

    };
}