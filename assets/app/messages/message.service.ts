import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Message } from './message.model';
import 'rxjs/Rx'; //importing this library will make .map work
import { Observable } from 'rxjs';

@Injectable() //we need this metadata in order to make the constructor work

export class MessageService {
   private messages: Message[] = []; // this is the exact same array as the one in message-list ts

   constructor(private http: Http){};

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-type': 'application/json'});
        //this http.post is an observable, which doesn't send a req yet, we need to subscribe to it first:
       //NB body is the data we're sending
       return this.http.post('http://localhost:3000/message', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}