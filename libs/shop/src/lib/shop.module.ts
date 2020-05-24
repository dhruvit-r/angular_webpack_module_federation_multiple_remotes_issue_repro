import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShopListComponent}
    ]),
  ],
  declarations: [ShopListComponent]
})
export class ShopModule {}
