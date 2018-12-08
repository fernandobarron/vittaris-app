import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroEstudiantePage } from './registro-estudiante';

@NgModule({
  declarations: [
    RegistroEstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroEstudiantePage),
  ],
})
export class RegistroEstudiantePageModule {}
