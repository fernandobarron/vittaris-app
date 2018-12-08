import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the RegistroEspacialistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-espacialista',
  templateUrl: 'registro-espacialista.html',
})
export class RegistroEspacialistaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroEspacialistaPage');
  }
  inicio(){
    this.navCtrl.setRoot(WelcomePage);
    //this.navCtrl.push(InicioPage);
  }
}
