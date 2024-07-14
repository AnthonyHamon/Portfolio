import { animate, state, style, trigger, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, PortfolioComponent, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss', 
})


export class ProjectComponent {

  @Input() firstProject = false;
  @Input() odd = false;
  @Input() project = {
    projectName: 'Fantasia Adventure',
    projectPicture: 'asset/img/projects/f-a-gaming-display.png',
    liveDemoLink: '',
    githubLink: '',
    usedTechnologies: 'JavaScript, HTML, CSS',
    projectDescription: '',
  };

}
