import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PrivacyPolicyComponent } from './legal-content/privacy-policy/privacy-policy.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient], 
  },
});

const privacyPolicyRoute: Routes = [
  { path: 'privacyPolicy', component: PrivacyPolicyComponent}
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideAnimations(), provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom([
      HttpClientModule, 
      TranslateModule.forRoot(provideTranslation()),
    ]),
  ]
};

