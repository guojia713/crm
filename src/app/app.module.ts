import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';
import { Router } from '@angular/router';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    LoginModule,
    NgbModule,
    HttpClientModule,
    // Attention, ce module doit être au dernier
    PagenotfoundModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
     // Use a custom replacer to display function names in the route configs
     const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

     console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
   }
 }

