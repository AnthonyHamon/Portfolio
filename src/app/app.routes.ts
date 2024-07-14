import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './legal-content/imprint/imprint.component';
import { PrivacyPolicyComponent } from './legal-content/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {'path': '', component: MainContentComponent },
    {'path': 'imprint', component: ImprintComponent},
    {'path': 'privacy-policy', component: PrivacyPolicyComponent},
];

