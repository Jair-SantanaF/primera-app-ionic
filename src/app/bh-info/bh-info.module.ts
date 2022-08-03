import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhInfoPageRoutingModule } from './bh-info-routing.module';

import { BhInfoPage } from './bh-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhInfoPageRoutingModule
  ],
  declarations: [BhInfoPage]
})
export class BhInfoPageModule {}
