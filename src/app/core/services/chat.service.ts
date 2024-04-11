// chat.service.ts
import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyDpoL9XINlPeZxwD5ljyoPhWXdxVL8YOl8';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async getResponse(message: string): Promise<string> {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
    const chat = await model.startChat({
      history: [
        { role: 'user', parts: [{ text: 'Hi! AI' }] },
        { role: 'model', parts: [{ text: 'Hi! What would you like to talk about today?' }] }
      ],
      generationConfig: { maxOutputTokens: 2000 }
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;

    return response.text();
  }
}