import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import { Mobiles, MobileObject } from '../representation-mobiles/MobileObjectInterface';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})


export class TableauComponent implements OnInit{

  constructor (private websocketService: WebsocketService) {

  }
  ngOnInit(): void {
    // Récupérer les données des mobiles depuis le service WebSocket
    this.websocketService.socket.onmessage = (event) => {
      const mobile = JSON.parse(event.data) as MobileObject;
      console.log(mobile);
    }
  }

}
