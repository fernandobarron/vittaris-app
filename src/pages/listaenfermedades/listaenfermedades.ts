import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnfermedadDetallePage } from '../enfermedad-detalle/enfermedad-detalle';
/**
 * Generated class for the ListaenfermedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaenfermedades',
  templateUrl: 'listaenfermedades.html',
})
export class ListaenfermedadesPage {
  yourArray = ['Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaenfermedadesPage');
  }
  detalleEnfermedad(){
    this.navCtrl.push(EnfermedadDetallePage);
  }

}
