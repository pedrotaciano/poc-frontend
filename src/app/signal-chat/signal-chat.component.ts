import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as signalR from '@microsoft/signalr';

interface Message {
  userName: string;
  text: string;
}

@Component({
  selector: 'app-signal-chat',
  templateUrl: './signal-chat.component.html',
  styleUrls: ['./signal-chat.component.scss']
})
export class SignalChatComponent implements OnInit {
  messages: Message[] = [];
  messageControl = new FormControl('');
  nameControl = new FormControl('');
  userName! : string | null;
  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7020/chat")
    .build();

  constructor() {
    this.startConnection();
  }

  ngOnInit(): void {
  }

  startConnection() {
    this.connection.on("newMessage", (userName: string, text: string) => {
      this.messages.push({
        text: text,
        userName: userName
      });
    });

    this.connection.start();
  }

  setUserName() {
    this.userName = this.nameControl.value;
  }

  sendMessage() {
    this.connection.send("newMessage", this.userName, this.messageControl.value)
    .then(() => {
      this.messageControl.setValue('');
    });
  }
}
