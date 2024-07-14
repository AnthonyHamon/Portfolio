import { Component, OnInit } from '@angular/core';
import { LanguageProgressBarComponent } from './language-progress-bar/language-progress-bar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [LanguageProgressBarComponent, TranslateModule, CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent implements OnInit {
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event)=>{
      this.currentLanguage = event.lang;
    })
  }

  languages = [
    {
      language: 'english',
      percentage: 75,
    },
    {
      language: 'german',
      percentage: 85,
    },
    {
      language: 'french',
      percentage: 100,
    },
  ]
}
