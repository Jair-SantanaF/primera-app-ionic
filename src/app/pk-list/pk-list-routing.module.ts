import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PKListPage } from './pk-list.page';

const routes: Routes = [
  {
    path: '',
    component: PKListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PKListPageRoutingModule {}
