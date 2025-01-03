import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { from, Observable } from "rxjs";
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export class LazyTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`./assets/i18n/${lang}.json`));
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: LazyTranslateLoader
        },
        defaultLanguage: 'nl',
        useDefaultLang: true
      })
    ), provideAnimationsAsync(),
  ]
});
