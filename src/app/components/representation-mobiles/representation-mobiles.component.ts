import { Component, OnInit } from '@angular/core';
import { WebsocketService } from "../../services/web-socket.service"
import { MobileObject } from './MobileObjectInterface';

@Component({
  selector: 'app-representation-mobiles',
  templateUrl: './representation-mobiles.component.html',
  styleUrls: ['./representation-mobiles.component.scss']
})
export class RepresentationMobilesComponent implements OnInit {
  mobileData: MobileObject[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    // Écoute les mises à jour WebSocket
    this.websocketService.socket.onmessage = (event) => {
      const mobile = JSON.parse(event.data) as MobileObject;
      this.mobileData.push(mobile);
      console.log("mobile : ", mobile)
    };
  }
  handleZoneClick(zoneId: number) {
    // Logique pour gérer le clic sur la zone (par exemple, afficher un message)
    console.log(`Zone ${zoneId} cliquée !`);
  }
}
