import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncremeterComponent } from './incremeter.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    IncremeterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[IncremeterComponent]
})
export class IncremeterModule { }
