import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from "@angular/core"; // Added this
import { Content } from 'ionic-angular';   // Added this


/*
  Generated class for the Chapter4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chapter4',
  templateUrl: 'chapter4.html'
})
export class Chapter4 {
    @ViewChild(Content) content: Content; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter4');
  }
  public scrollElement(targetName) {
      let element = document.getElementById(targetName);
      this.content.scrollTo(0, element.offsetTop, 500);
  }
  downloadFile(fileId) {
      let url = 'https://drive.google.com/uc?export=download&id=' + fileId;
      window.open(url);
  } 

  public scrollElement0() {
      this.content.scrollTo(0, 0, 600);
  }
}
