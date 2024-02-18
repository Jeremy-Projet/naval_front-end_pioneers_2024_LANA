import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$!: WebSocketSubject<any>;

  constructor() { }

  connect(url: string): void {
    
    this.socket$ = webSocket(url);

    this.socket$.subscribe(
      (message) => {
        console.log('Message reçu:', message);
      }
    );
  }
}