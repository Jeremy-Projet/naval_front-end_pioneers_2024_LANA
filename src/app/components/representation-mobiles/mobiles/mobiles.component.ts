import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';
import { Mobiles, MobileObject } from '../MobileObjectInterface';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  mobileData: MobileObject[] = [];
  mobilesTriangle: Mobiles[] = [];
  mobilesCircle: Mobiles[] = [];
  mobilesSquare: Mobiles[] = [];
  mobilesLosange: Mobiles[] = [];

  constructor (private websocketService: WebsocketService) {
    
  }

  ngOnInit(): void {
    // Récupérer les données des mobiles depuis le service WebSocket
    this.websocketService.socket.onmessage = (event) => {
      const mobile = JSON.parse(event.data) as MobileObject;
      console.log("mobile shape", mobile.mobiles)
      this.mobileData.push(mobile);
      console.log("this.mobileData.push(mobile) : ", this.mobileData);

      console.log("mobileData : ", this.mobileData);
      console.log("mobilesTriangle : ", this.mobilesTriangle);
      console.log("mobilesCircle : ", this.mobilesCircle);
      console.log("mobilesSquare : ", this.mobilesSquare);
      console.log("mobilesLosange : ", this.mobilesLosange);
    }
    // Initialiser le graphique des mobiles
    const mobilesCanvas: any = document.getElementById('mobilesChart');
    if (mobilesCanvas) {
      const mobilesCtx = mobilesCanvas.getContext('2d');
      if (mobilesCtx) {
        this.drawMobiles(mobilesCtx);
      }
    }
  }

  drawMobiles(ctx: CanvasRenderingContext2D): void {
    // Dessinez votre cercle avec différentes zones
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, 2 * Math.PI);
    ctx.stroke();

    // Dessinez vos mobiles (formes)
    // Exemple: dessinez un triangle à l'intérieur du cercle
    ctx.beginPath();
    ctx.moveTo(200, 50); // Point supérieur du triangle
    ctx.lineTo(50, 300); // Coin inférieur gauche
    ctx.lineTo(350, 300); // Coin inférieur droit
    ctx.closePath(); // Fermez le chemin pour former un triangle
    ctx.fillStyle = 'red'; // Définissez la couleur de remplissage du triangle
    ctx.fill(); // Remplissez le triangle avec la couleur spécifiée
  }



}
