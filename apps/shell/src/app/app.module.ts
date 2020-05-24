import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forRoot([
      {
        path: 'shop',
        loadChildren: () => import('profile_feature/profile_module').then(m => m.ProfileModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('shop_feature/shop_module').then(m => m.ShopModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/shop'
      },
      {
        path: "**",
        redirectTo: "/shop",
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
