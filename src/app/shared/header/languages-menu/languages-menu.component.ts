import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './languages-menu.component.html',
  styleUrl: './languages-menu.component.scss'
})
export class LanguagesMenuComponent {

  constructor(private translate: TranslateService) {
  }

  currentLanguage = 'en';


  english = 'assets/icons/en-flag-24px.svg';
  german = 'assets/icons/de-flag-24px.svg';
  french = 'assets/icons/fr-flag-24px.svg';

  languages = [
    {
      language: 'en',
      src: 'assets/icons/en-flag-24px.svg',
      isSelected: true
    },
    {
      language: 'de',
      src: 'assets/icons/de-flag-24px.svg',
      isSelected: false
    },
    {
      language: 'fr',
      src: 'assets/icons/fr-flag-24px.svg',
      isSelected: false
    }
  ]



  switchLanguage(language: string, index:number) {
    this.languages.forEach(lang => {
      lang.isSelected = false;
    });
    this.languages[index].isSelected = true;
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
