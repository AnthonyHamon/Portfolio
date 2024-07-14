import { Component, OnInit } from '@angular/core';
import { LanguagesMenuComponent } from './languages-menu/languages-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguagesMenuComponent, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang;

  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    })
  }
}
