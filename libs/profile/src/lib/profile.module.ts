import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileDashboardComponent } from './components/profile-dashboard/profile-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ProfileDashboardComponent}
    ]),
  ],
  declarations: [ProfileDashboardComponent]
})
export class ProfileModule {}
