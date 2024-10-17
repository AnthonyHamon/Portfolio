import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, TranslateModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {

  portfolio = [
    {
      projectName: 'Fantasia Adventure',
      projectPicture: 'assets/img/projects/fa-game-screen-console3.jpg',
      liveDemoLink: 'https://fantasia-adventure.anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/Fantasia-Adventures',
      usedTechnologies: 'JavaScript, HTML, CSS',
      projectDescription: 'fantasiaAdventureDescription',

    },
    {
      projectName: 'Join',
      projectPicture: 'assets/img/projects/join-phone.jpg',
      liveDemoLink: 'https://join.anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/Join-GruppenProjekt',
      usedTechnologies: 'Angular, TypeScript, CSS, Firebase',
      projectDescription: 'joinDescription',

    },
    {
      projectName: 'Pokédex',
      projectPicture: 'assets/img/projects/pokedex-reverse.jpg',
      liveDemoLink: 'https://pokédex.anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/Pokedex',
      usedTechnologies: 'JavaScript, HTML, CSS, API',
      projectDescription: 'pokedexDescription',

    },
    {
      projectName: 'DABubble',
      projectPicture: 'assets/img/projects/DABubble.jpg',
      liveDemoLink: 'https://dabubble.anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/DABubble',
      usedTechnologies: 'Angular, TypeScript, Firebase',
      projectDescription: 'dabubbleDescription',
    }
  ]
}
