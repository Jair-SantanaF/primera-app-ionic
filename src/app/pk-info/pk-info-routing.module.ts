import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PkInfoPage } from './pk-info.page';

const routes: Routes = [
  {
    path: '',
    component: PkInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PkInfoPageRoutingModule {}
