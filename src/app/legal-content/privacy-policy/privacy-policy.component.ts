import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // Scroll to the top when the component is initialized
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
