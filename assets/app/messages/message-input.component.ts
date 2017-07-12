import { Component } from "@angular/core";
import { MessageService } from './message.service';
import { Message } from './message.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-message-input',
    templateUrl: 'message-input.component.html'
})

export class MessageInputComponent {

    constructor (private messageService: MessageService) {

    }
    onSubmit(form: NgForm) { //the type is NgForm, but in html it's ngForm
        const message = new Message(form.value.content, 'Bjim');
        this.messageService.addMessage(message);
        form.resetForm() //this clears the input field after clicking save
    }
}