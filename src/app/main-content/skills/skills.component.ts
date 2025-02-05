import { Component, OnInit } from '@angular/core';
import { TechnologyComponent } from './technology/technology.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TechnologyComponent, TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{

  currentLanguage: string;

  constructor(private translate:TranslateService){
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event) =>{
      this.currentLanguage = event.lang;
    })
  }


  skills = [
    {
      name: 'Angular',
      image: 'angular.svg',
      link: 'https://angular.dev/',
    },
    {
      name: 'TypeScript',
      image: 'typescript.png',
      link: 'https://www.typescriptlang.org/',
    },
    {
      name: 'JavaScript',
      image: 'javascript.png',
      link: 'https://www.javascript.com/',
    },
    {
      name: 'HTML',
      image: 'html.svg',
      link: 'https://html.com/',
    },
    {
      name: 'Firebase',
      image: 'firebase.svg',
      link: 'https://firebase.google.com/',
    },
    {
      name: 'GIT',
      image: 'git.png',
      link: 'https://git-scm.com/',
    },
    {
      name: 'CSS',
      image: 'css.png',
      link: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
      name: 'Rest-Api',
      image: 'rest-api.png',
      link: 'https://restfulapi.net/',
    },
    {
      name: 'Scrum',
      image: 'scrum.png',
      link: 'https://www.scrum.org/',
    },
    {
      name: 'Material Design',
      image: 'material-design.svg',
      link: 'https://m3.material.io/',
    },
  ];
}
