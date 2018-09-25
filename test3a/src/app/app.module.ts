import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { About } from '../pages/about/about';
import { Chapter1 } from '../pages/chapter1/chapter1';
import { Chapter2 } from '../pages/chapter2/chapter2';
import { Chapter3 } from '../pages/chapter3/chapter3';
import { Chapter4 } from '../pages/chapter4/chapter4';
import { Chapter5 } from '../pages/chapter5/chapter5';
import { Chapter6 } from '../pages/chapter6/chapter6';
import { Chapter7 } from '../pages/chapter7/chapter7';
import { Chapter8 } from '../pages/chapter8/chapter8';
import { PdfPage } from '../pages/pdf/pdf';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    About,
    Chapter1,
    Chapter2,
    Chapter3,
    Chapter4,
    Chapter5,
    Chapter6,
    Chapter7,
      Chapter8,
    PdfPage,
    PdfViewerComponent

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    About,
    Chapter1,
    Chapter2,
    Chapter3,
    Chapter4,
    Chapter5,
    Chapter6,
    Chapter7,
      Chapter8,
    PdfPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
