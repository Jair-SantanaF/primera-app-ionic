import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhInfoPage } from './bh-info.page';

const routes: Routes = [
  {
    path: '',
    component: BhInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhInfoPageRoutingModule {}
