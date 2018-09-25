import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ViewChild } from "@angular/core"; // Added this
import { Content } from 'ionic-angular';   // Added this


declare var cordova: any;
/*
  Generated class for the Chapter1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chapter1',
  templateUrl: 'chapter1.html'
})
export class Chapter1 {

  @ViewChild(Content) content: Content;  // Added this

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter1');
  }
/*
  download() {
      let ft = new Transfer();
      const url = 'http://www.hse.gov.uk/pubns/indg73.pdf';

      ft.download(url, cordova.file.dataDirectory + 'indg73.pdf').then(() =>{
              console.log('download complete');
      }, (error) => {
              // handle error
          });
  }

  showAlert() {
      let alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
          buttons: ['OK']
      });
      alert.present();
  }
*/

  // Added all of the below

  public scrollElement(targetName) {
      let element = document.getElementById(targetName);
      this.content.scrollTo(0, element.offsetTop, 500);
  }

  public scrollElement0() {
      this.content.scrollTo(0, 0, 600);
  }

   downloadFile(fileId) {
      let url = 'https://drive.google.com/uc?export=download&id=' + fileId;
      window.open(url);
  }   

}
