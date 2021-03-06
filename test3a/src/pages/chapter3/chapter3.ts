﻿import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from "@angular/core"; // Added this
import { Content } from 'ionic-angular';   // Added this

/*
  Generated class for the Chapter3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-chapter3',
    templateUrl: 'chapter3.html'
})
export class Chapter3 {

    @ViewChild(Content) content: Content;  // Added this

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Chapter3');
    }


    public scrollElement0() {
        this.content.scrollTo(0, 0, 500);
    }
    public scrollElement(targetName) {
        let element = document.getElementById(targetName);
        this.content.scrollTo(0, element.offsetTop, 500);
    }
    downloadFile(fileId) {
        let url = 'https://drive.google.com/uc?export=download&id=' + fileId;
        window.open(url);
    } 
}