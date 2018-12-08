import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleConsultaPage } from '../detalle-consulta/detalle-consulta';
/**
 * Generated class for the ListaConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-consulta',
  templateUrl: 'lista-consulta.html',
})
export class ListaConsultaPage {
  yourArray = ['Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad','Nombre enfermedad'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaConsultaPage');
  }
  detalleConsulta(){
    this.navCtrl.push(DetalleConsultaPage);
  }
}
