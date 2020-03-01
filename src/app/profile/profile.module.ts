import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule,NgbModule,SharedModule]
})
export class ProfileModule {}