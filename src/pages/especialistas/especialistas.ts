import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EspecialistasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-especialistas',
  templateUrl: 'especialistas.html',
})
export class EspecialistasPage {
  yourArray = [20,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspecialistasPage');
  }

}
