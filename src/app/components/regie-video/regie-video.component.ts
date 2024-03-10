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
      this.videoUrl = "http://localhost:7001/video_1.mp4"
  }
}
