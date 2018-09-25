import { Component } from '@angular/core';
import { Chapter1 } from '../chapter1/chapter1';
import { Chapter2 } from '../chapter2/chapter2';
import { Chapter3 } from '../chapter3/chapter3';
import { Chapter4 } from '../chapter4/chapter4';
import { Chapter5 } from '../chapter5/chapter5';
import { Chapter6 } from '../chapter6/chapter6';
import { Chapter7 } from '../chapter7/chapter7';
import { Chapter8 } from '../chapter8/chapter8';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController)  {}

  openChapter1() {
  this.navCtrl.push(Chapter1);
  }

  openChapter2() {
  this.navCtrl.push(Chapter2);
  }

  openChapter3() {
  this.navCtrl.push(Chapter3);
  }

  openChapter4() {
  this.navCtrl.push(Chapter4);
  }

  openChapter5() {
  this.navCtrl.push(Chapter5);
  }

  openChapter6() {
  this.navCtrl.push(Chapter6);
  }

  openChapter7() {
  this.navCtrl.push(Chapter7);
  }

  openChapter8() {
  this.navCtrl.push(Chapter8);
  }


}
