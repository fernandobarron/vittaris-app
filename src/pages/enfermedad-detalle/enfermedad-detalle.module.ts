import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnfermedadDetallePage } from './enfermedad-detalle';

@NgModule({
  declarations: [
    EnfermedadDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(EnfermedadDetallePage),
  ],
})
export class EnfermedadDetallePageModule {}
