import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleConsultaPage } from './detalle-consulta';

@NgModule({
  declarations: [
    DetalleConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleConsultaPage),
  ],
})
export class DetalleConsultaPageModule {}
