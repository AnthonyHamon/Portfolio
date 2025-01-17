import { Component, OnInit, Input } from '@angular/core';
import {slideInRightAnimation } from 'angular-animations';
import { ContactComponent } from '../contact/contact.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.scss',
  animations: [slideInRightAnimation({translate: '200%', duration: 2000})]
})

export class UserFeedbackComponent implements OnInit {

  constructor(private translate: TranslateService){
    this.translateMessage();
  }


  ngOnInit(): void {
    this.slideInPopup();
    this.updateMessage();

  }

  @Input() positiveUserFeedback = false;

  animationState = false;
  animationWithState = false;

  messageSuccessfullySent = "your message was sent successfully";
  errorMessage = "your message couldn't be sent, please try again";

  slideInPopup() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 1);
  }

  translateMessage() {
    this.translate.get('userFeedback.messageSent').subscribe((res: string) => {
      this.messageSuccessfullySent = res;
    });
    this.translate.get('messageError').subscribe((res: string) => {
      this.errorMessage = res;
    });
  }


  updateMessage() {
    if (this.positiveUserFeedback) {
      return this.messageSuccessfullySent;
    } else {
      return this.errorMessage
    }
  }

}
