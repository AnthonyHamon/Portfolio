import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgxTypedWriterModule, TranslateModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  currentLanguage : string;

  constructor(private translate: TranslateService){
    this.currentLanguage = translate.currentLang;
  }


  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event) =>{
      this.currentLanguage = event.lang;
    })
  }

}
