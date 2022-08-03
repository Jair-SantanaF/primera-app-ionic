import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PkInfoPageRoutingModule } from './pk-info-routing.module';

import { PkInfoPage } from './pk-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PkInfoPageRoutingModule
  ],
  declarations: [PkInfoPage]
})
export class PkInfoPageModule {}
