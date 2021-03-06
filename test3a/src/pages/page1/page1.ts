﻿import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }
  downloadFile(fileId) {
      let url = 'https://drive.google.com/uc?export=download&id=' + fileId;
      window.open(url);
  } 
  openChapters() {
      this.navCtrl.push(Page2);
  }


}
