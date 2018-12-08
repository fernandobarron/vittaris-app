import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaConsultaPage } from './lista-consulta';

@NgModule({
  declarations: [
    ListaConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaConsultaPage),
  ],
})
export class ListaConsultaPageModule {}
