import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { RegistroEspacialistaPage } from '../registro-espacialista/registro-espacialista'
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userData = {"nombre": "", "email": "", "usuario": "", "password": ""};

  usuario = "";
  especialista = "";
  estudiante = "";
  tipousuario ="";

  private logeo: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  logForm() {
    console.log(this.logeo.value.tipousuario);
    this.tipousuario= this.logeo.value.tipousuario;
    
  }


  /*
  login(){
  	this.navCtrl.push(LoginPage);
  }
  */

  signup(){
    console.log(this.logeo.value.tipousuario);
    this.tipousuario= this.logeo.value.tipousuario;
    
    this.navCtrl.push(RegistroEspacialistaPage);
    //this.navCtrl.push(InicioPage);
  }
}
