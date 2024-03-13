import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-regie-video',
  templateUrl: './regie-video.component.html',
  styleUrls: ['./regie-video.component.scss']
})
export class RegieVideoComponent implements OnInit{
  constructor(private elementRef: ElementRef) {}
  videoUrl:string = ''
  
  ngOnInit(): void {
      this.videoUrl = "http://localhost:7001/video_1.mp4";
      const video = this.elementRef.nativeElement.querySelector('video');
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }

      const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is visible in the viewport
          console.log('video jouée');
          video.muted = true;
          video.play();
          // Faire quelque chose lorsque l'élément est visible
        } else {
          // Element is not visible in the viewport
          console.log('vidéo mise en pause');
          video.pause();
          // Faire quelque chose lorsque l'élément n'est pas visible
        }
      });
    }, options);

    // Récupérer l'élément cible
    const target = this.elementRef.nativeElement.querySelector('#intersectionTarget');
    

    // Commencer à observer l'élément cible
    observer.observe(target);
  }
}
