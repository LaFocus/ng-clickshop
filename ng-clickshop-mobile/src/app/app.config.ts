import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { routes } from './app-routing.module';
import { provideIonicAngular } from '@ionic/angular/standalone';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), provideIonicAngular({})]
};
