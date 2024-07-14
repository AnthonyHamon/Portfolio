import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserFeedbackComponent } from '../user-feedback/user-feedback.component';
import { TranslateModule } from '@ngx-translate/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UserFeedbackComponent, TranslateModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('slideInRight', [
      state('hidden', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ]),
    ]),
    trigger('slideInLeft', [
      state('hidden', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ]),
    ])
  ],
})
export class ContactComponent implements OnInit, OnDestroy{

  isVisible = false;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // debugger
    const formElement = this.el.nativeElement.querySelector('#contactForm');
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          } else {
            this.isVisible = false;
          }
        });
      }, { threshold: 0.1 });
      this.observer.observe(formElement);
}

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }


  http = inject(HttpClient);

  userFeedbackPopup = false;
  positiveUserFeedback = false;

  checked = false;


  contactData = {
    name: '',
    email: '',
    message: '',
  }

  namePlaceholder = 'contactComponent.namePlaceholder';
  emailPlaceholder = 'contactComponent.emailPlaceholder';
  messagePlaceholder = 'contactComponent.messagePlaceholder';



  mailTest = false;

  post = {
    endPoint: 'https://anthony-hamon.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('response is', response);
            this.positiveUserFeedback = true;
            this.showUserFeedbackPopup(ngForm);
          },
          error: (error) => {
            console.error(error);
            this.showUserFeedbackPopup(ngForm);
          },
          complete: () => console.info('send post complete'),
        });
    }
    else if (ngForm.submitted && this.mailTest) {
      this.showUserFeedbackPopup(ngForm);
      this.positiveUserFeedback = true;

    }
  }


  showUserFeedbackPopup(ngForm: NgForm) {
    this.userFeedbackPopup = true;
    setTimeout(() => {
      this.userFeedbackPopup = false;
      ngForm.resetForm();
    }, 2000);
  }

}


