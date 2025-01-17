import { Component, OnInit } from '@angular/core';
import { SocialLinksBarComponent } from './social-links-bar/social-links-bar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {

currentLanguage: string;

constructor(private translate: TranslateService){
  this.currentLanguage = translate.currentLang;
}

ngOnInit(): void {
  this.translate.onLangChange.subscribe((event) =>{
    this.currentLanguage = event.lang;
  })
}

}
