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
    // {
    //   projectName: 'Portfolio',
    //   projectPicture: 'assets/img/projects/portfolio.jpg',
    //   liveDemoLink: 'https://anthony-hamon.com/',
    //   githubLink: 'https://github.com/AnthonyHamon/MyPortfolio',
    //   usedTechnologies: 'Angular, TypeScript, SCSS',
    //   projectDescription: 'portfolioDescription',

    // },
    // {
    //   projectName: 'Simple CRM',
    //   projectPicture: 'assets/img/projects/portfolio.jpg',
    //   liveDemoLink: 'https://da-bubble.anthony-hamon.com/',
    //   githubLink: 'https://github.com/AnthonyHamon/MyPortfolio',
    //   usedTechnologies: 'Angular, Firebase',
    //   projectDescription: 'A very Simple Customer Relationship Management system working with CRUD functionality.',

    // }
  ]
}
