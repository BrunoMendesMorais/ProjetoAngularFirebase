import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaPageRoutingModule } from './galeria-routing.module';

import { GaleriaPage } from './galeria.page';
import { HeaderModule } from '../shared/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaPageRoutingModule,
    HeaderModule
  ],
  declarations: [GaleriaPage]
})
export class GaleriaPageModule {}
