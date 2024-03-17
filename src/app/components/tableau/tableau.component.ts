import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import { Mobiles, MobileObject } from '../representation-mobiles/MobileObjectInterface';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  mobiles: Mobiles[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.socket.onmessage = (event) => {
      const mobileObject = JSON.parse(event.data) as MobileObject;
      if (mobileObject.eventType === 'INITIAL_LOAD') {
        this.mobiles = Object.values(mobileObject.mobiles);
      } else if (mobileObject.eventType === 'MOBILES_UPDATED') {
        for (const id in mobileObject.mobiles) {
          if (mobileObject.mobiles.hasOwnProperty(id)) {
            const updatedMobile = mobileObject.mobiles[id];
            const index = this.mobiles.findIndex(mobile => mobile.id === updatedMobile.id);
            if (index !== -1) {
              this.mobiles[index] = { ...this.mobiles[index], ...updatedMobile };
            }
          }
        }
      }
    };
  }

  formatDate(timestamp: number): string {
    // Créez un objet Date à partir du timestamp
    const date = new Date(timestamp);
    // Utilisez les méthodes de l'objet Date pour obtenir les composants de date souhaités
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois commencent à partir de zéro, donc ajoutez 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // Construisez la chaîne de date formatée
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
}
