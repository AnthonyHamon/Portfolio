import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { LandscapeScreenOverlayComponent } from './landscape-screen-overlay/landscape-screen-overlay.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, LandscapeScreenOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'my-Portfolio';

  isLandscape = false;

   constructor(translate: TranslateService, private breakpointObserver: BreakpointObserver) {

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

ngOnInit(): void {
  this.breakpointObserver.observe([
    Breakpoints.HandsetLandscape,
  ]).subscribe(result => {
    this.isLandscape = result.matches;
  });
}


}

