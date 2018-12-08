import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaenfermedadesPage } from './listaenfermedades';

@NgModule({
  declarations: [
    ListaenfermedadesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaenfermedadesPage),
  ],
})
export class ListaenfermedadesPageModule {}
