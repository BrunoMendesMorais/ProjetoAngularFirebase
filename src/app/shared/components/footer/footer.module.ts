import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule {}
