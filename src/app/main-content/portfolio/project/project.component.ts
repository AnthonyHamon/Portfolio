import { animate, state, style, trigger, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, PortfolioComponent, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [
    trigger('slideInRight', [
      state('hidden', style({
        transform: 'translateX(-75%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ]),
    ]),
    trigger('slideInLeft', [
      state('hidden', style({
        transform: 'translateX(75%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ]),
    ])
  ],
})


export class ProjectComponent {

  @Input() id = '';
  @Input() firstProject = false;
  @Input() even = false;
  @Input() odd = false;
  @Input() project = {
    projectName: '',
    projectPicture: '',
    projectVideo: '',
    liveDemoLink: '',
    githubLink: '',
    usedTechnologies: '',
    projectDescription: '',
  };

  @ViewChild('video', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;



  isVisible = false;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }


  ngAfterViewInit() {
    this.startVideo();
  }

  ngOnInit() {
    const projectElement = this.el.nativeElement.querySelector('#project');
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      });
    }, { threshold: 0.1 });
    this.observer.observe(projectElement);
  }

  startVideo() {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().catch((error) => {
      console.error('Autoplay failed:', error);
    });

  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
