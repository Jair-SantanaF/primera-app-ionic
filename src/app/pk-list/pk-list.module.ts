import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PKListPageRoutingModule } from './pk-list-routing.module';

import { PKListPage } from './pk-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PKListPageRoutingModule
  ],
  declarations: [PKListPage]
})
export class PKListPageModule {}
