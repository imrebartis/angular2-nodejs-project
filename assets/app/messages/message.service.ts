import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Message } from './message.model';

@Injectable() //we need this metadata in order to make the constructor work

export class MessageService {
   private messages: Message[] = []; // this is the exact same array as the one in message-list ts

   constructor(private http: Http){};

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages)
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}