import { Message } from './message.model';

export class MessageService {
   private messages: Message[] = []; // this is the exact same array as the one in message-list ts

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