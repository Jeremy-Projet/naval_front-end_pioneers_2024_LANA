import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { WebsocketService } from "../../../services/web-socket.service"
import { MobileObject } from '../MobileObjectInterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cercle-trigo',
  templateUrl: './cercle-trigo.component.html',
  styleUrls: ['./cercle-trigo.component.scss']
})
export class CercleTrigoComponent implements OnInit {
  
  @Input() mobiles: MobileObject[] = [];

  nbrSectors = 12; // Nombre de secteurs dans le cercle
  circles = 7; // Nombre de cercles
  zonesPerCircle = this.nbrSectors; // Nombre de zones par cercle
  totalZones = this.nbrSectors * this.circles; // Nombre total de zones dans chaque cercle
  circleIds: string[][] = []; // Tableau pour stocker les IDs des zones de chaque cercle
  animationInterval: any; // Intervalle d'animation

  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
    // Récupérer les données des mobiles depuis le service WebSocket
    this.websocketService.socket.onmessage = (event) => {
      const mobile = JSON.parse(event.data) as MobileObject;
      this.mobiles.push(mobile);
      //console.log("mobile : ", mobile);
    };

    // Générer les IDs pour chaque cercle
    for (let circle = 1; circle <= this.circles; circle++) {
      const circleZoneIds: string[] = [];
      for (let i = 1; i <= this.nbrSectors; i++) {
        circleZoneIds.push(`Circle-${circle}-Zone-${i}`);
      }
      this.circleIds.push(circleZoneIds);
      console.log(`${this.circleIds}`)
    }

    // Initialiser le graphique
    this.initializeChart();
  }

  // Initialiser le graphique
  initializeChart(): void {
    // Définir les données pour les graphiques
    const datasets = this.circleIds.map(() => {
      return {
        backgroundColor: "white",
        borderColor: 'black',
        data: Array.from({ length: this.zonesPerCircle }, () => 1)
      };
    });

    const data: any = {
      datasets: datasets
    };

    // Configuration des graphiques
    const config: ChartConfiguration<'pie'> = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        animation: false // Désactiver l'animation pour un meilleur rendu
      }
    };

    // Initialiser les graphiques
    const canvas: any = document.getElementById('circleChart');
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, config);

    // Ajouter un gestionnaire d'événements de clic à l'élément de graphique
    canvas.addEventListener('click', (event:any) => {
      const boundingRect = canvas.getBoundingClientRect();
      const x = event.clientX - boundingRect.left;
      const y = event.clientY - boundingRect.top;
      const sectorSize = 2 * Math.PI / this.nbrSectors;
      const angle = Math.atan2(y - boundingRect.height / 2, x - boundingRect.width / 2);
      let sector = Math.floor((angle + Math.PI) / sectorSize) % this.nbrSectors;
      const circle = Math.floor(Math.sqrt(Math.pow(x - boundingRect.width / 2, 2) + Math.pow(y - boundingRect.height / 2, 2)) / (boundingRect.width / (2 * this.circles)));
      const zoneId = this.circleIds[circle][sector];
      console.log('Zone cliquée:', zoneId);
      // Vous pouvez faire ce que vous voulez avec l'ID de la zone ici
    });
  }
}