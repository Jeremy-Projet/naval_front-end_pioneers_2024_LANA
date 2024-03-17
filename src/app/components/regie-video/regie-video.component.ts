import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-regie-video',
  templateUrl: './regie-video.component.html',
  styleUrls: ['./regie-video.component.scss']
})
export class RegieVideoComponent implements OnInit{
  constructor(private elementRef: ElementRef) {}
  videosUrl: string[] = [
    "http://localhost:7001/video_1.mp4",
    "http://localhost:7001/video_2.mp4",
    "http://localhost:7001/video_3.mp4",
    "http://localhost:7001/video_4.mp4",
    "http://localhost:7001/video_5.mp4",
    "http://localhost:7001/video_6.mp4",
    "http://localhost:7001/video_7.mp4",
    "http://localhost:7001/video_8.mp4",
    "http://localhost:7001/video_9.mp4",
    "http://localhost:7001/video_10.mp4",
    "http://localhost:7001/video_11.mp4",
    "http://localhost:7001/video_12.mp4",
    "http://localhost:7001/video_13.mp4",
    "http://localhost:7001/video_14.mp4",
    "http://localhost:7001/video_15.mp4",
    "http://localhost:7001/video_16.mp4",
    "http://localhost:7001/video_17.mp4",
    "http://localhost:7001/video_18.mp4",
    "http://localhost:7001/video_19.mp4",
    "http://localhost:7001/video_20.mp4",

  ];
  
  ngOnInit(): void {
      
      const video = this.elementRef.nativeElement.querySelector('#intersectionTarget').querySelector('video');
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
