import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BHListPage } from './bh-list.page';

const routes: Routes = [
  {
    path: '',
    component: BHListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BHListPageRoutingModule {}
