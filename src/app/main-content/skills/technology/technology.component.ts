import { Component, Input } from '@angular/core';
import { rubberBandAnimation } from 'angular-animations';



@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
  animations: [rubberBandAnimation()],
})


  export class TechnologyComponent {

    animationState = false;

    @Input() technology = {
      name: '',
      image: '',
      link: '',
    };

    animateTechnologyLink(){
        this.animationState = true;
        setTimeout(() => {
          this.animationState = false;
        }, 1);
    }

  }

