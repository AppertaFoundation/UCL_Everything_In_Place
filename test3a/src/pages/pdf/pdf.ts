import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

/*
  Generated class for the Pdf page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
  providers: [PdfViewerComponent]
})
export class PdfPage {
    public pdf;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.pdf = "http://localhost/test.pdf";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfPage');
  }

}
