import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socket: WebSocket;


  private socket$!: WebSocketSubject<any>;
  public socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:7000/ws/simulation/sitac');
    this.socket.onopen = (event) => {
      console.log('Connexion WebSocket établie !');
    };
    this.socket.onmessage = (event) => {
      const mobileData = JSON.parse(event.data);
      console.log("Message data : ", mobileData);
    };
    this.socket.onclose = (event) => {
      console.log('Connexion WebSocket fermée.');
    };


  }

  connect(url: string): void {

    this.socket$ = webSocket(url);

    this.socket$.subscribe(
      (message) => {
        console.log('Message reçu:', message);
      }
    );

  }
}
