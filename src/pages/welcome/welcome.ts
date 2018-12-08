import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AlertaPage } from '../alerta/alerta';
import { ListaenfermedadesPage } from '../listaenfermedades/listaenfermedades';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  yourArray = ['first','second'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(AlertaPage);
    popover.present({
      ev: myEvent
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  listaenfermedad(){
    this.navCtrl.push(ListaenfermedadesPage);
  }
}
