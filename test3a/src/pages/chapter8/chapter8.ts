import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from "@angular/core"; // Added this
import { Content } from 'ionic-angular';   // Added this

/*
  Generated class for the Chapter8 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chapter8',
  templateUrl: 'chapter8.html'
})
export class Chapter8 {

@ViewChild(Content) content: Content;  // Added this

constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter8');
  }
  public scrollElement(targetName) {
      let element = document.getElementById(targetName);
      this.content.scrollTo(0, element.offsetTop, 500);
  }

}
