import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroConsultaPage } from './registro-consulta';

@NgModule({
  declarations: [
    RegistroConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroConsultaPage),
  ],
})
export class RegistroConsultaPageModule {}
