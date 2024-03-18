import { Component } from '@angular/core';
import { WebsocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent {
  title = '';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    //this.websocketService.connect('ws://localhost:7000/ws/simulation/sitac');
  }
}