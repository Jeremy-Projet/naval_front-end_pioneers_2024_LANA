import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cercle-trigo',
  templateUrl: './cercle-trigo.component.html',
  styleUrls: ['./cercle-trigo.component.scss']
})
export class CercleTrigoComponent implements OnInit {
  @ViewChild('cercleTrigoCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null = null;

  zones: { id: string, startAngle: number, endAngle: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d');
    if (this.context) {
      this.dessinerCercleTrigo();
    } else {
      console.error("Impossible d'obtenir le contexte du canvas.");
    }
  }

  dessinerCercleTrigo() {
    if (!this.context) return;

    const centerX = this.canvasRef.nativeElement.width / 2;
    const centerY = this.canvasRef.nativeElement.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    // Diviser le cercle en zones
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#80ff00', '#0080ff', '#00ff80', '#ff0080'];
    const angleStep = (2 * Math.PI) / colors.length;

    for (let i = 0; i < colors.length; i++) {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      const id = `zone_${i + 1}`;
      this.zones.push({ id, startAngle, endAngle });

      // Dessiner la zone
      this.context.fillStyle = colors[i];
      this.context.beginPath();
      this.context.moveTo(centerX, centerY);
      this.context.arc(centerX, centerY, radius, startAngle, endAngle);
      this.context.lineTo(centerX, centerY);
      this.context.fill();
    }
  }

  onCanvasClick(event: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = this.canvasRef.nativeElement.width / 2;
    const centerY = this.canvasRef.nativeElement.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

    if (distanceFromCenter <= radius) {
      const angle = Math.atan2(y - centerY, x - centerX);
      const degrees = (angle * 180) / Math.PI;

      // Trouver la zone cliquée
      for (const zone of this.zones) {
        if (degrees >= zone.startAngle * 180 / Math.PI && degrees <= zone.endAngle * 180 / Math.PI) {
          console.log('Zone cliquée:', zone.id);
          break;
        }
      }
    }
  }
}
