import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BHListPageRoutingModule } from './bh-list-routing.module';

import { BHListPage } from './bh-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BHListPageRoutingModule
  ],
  declarations: [BHListPage]
})
export class BHListPageModule {}
