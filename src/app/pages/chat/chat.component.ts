import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../core/services/chat.service'; // Import chat service if created

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: { role: string; text: string }[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) { } // Inject chat service if created

  async ngOnInit() {
    // Initial greeting messages (optional)
    this.messages.push({ role: 'user', text: 'Hi! AI' });
    this.messages.push({ role: 'model', text: 'Hi! What would you like to talk about today?' });
  }

  async sendMessage() {
    if (!this.newMessage.trim()) {
      return;
    }

    const response = await this.chatService.getResponse(this.newMessage);

    this.messages.push({ role: 'user', text: this.newMessage });
    this.messages.push({ role: 'model', text: response });
    this.newMessage = '';
  }
}