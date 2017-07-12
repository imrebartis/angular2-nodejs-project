import { Message } from './message.model';

export class MessageService {
   private messages: Message[] = [];

    addMessage(message : Message) {
        this.messages.push(message);
    }

    getMessage(){
        return this.messages;
    }

    deleteMessage(message : Messages){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}