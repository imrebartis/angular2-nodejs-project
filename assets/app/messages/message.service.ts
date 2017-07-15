import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import 'rxjs/Rx'; //importing this library will make .map work
import { Observable } from 'rxjs';

@Injectable() //we need this metadata in order to make the constructor work

export class MessageService {
   private messages: Message[] = []; // this is the exact same array as the one in message-list ts

   messageIsEdit = new EventEmitter<Message>();
   constructor(private http: Http){};

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-type': 'application/json'});
        //this http.post is an observable, which doesn't send a req yet, we need to subscribe to it first:
       //NB body is the data we're sending
       //better use '/message' instead of http://localhost:3000/message, latter won't work in production
       return this.http.post('/message', body, {headers: headers})
        .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'DummyBoy', result.obj._id, null);
                this.messages.push(message);
                return message;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages(){
               //better use '/message' instead of http://localhost:3000/message, latter won't work in production
        return this.http.get('/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'DummyUserName', message._id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));

    }

     editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

       updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/message/' + message.messageId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/' + message.messageId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}