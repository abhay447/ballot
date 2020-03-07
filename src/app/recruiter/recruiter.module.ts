import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@app/shared';
import { RecruiterRoutingModule } from './recruiter-routing.module';

@NgModule({
  declarations: [RecruiterComponent],
  imports: [CommonModule,NgbModule,SharedModule,RecruiterRoutingModule]
})
export class RecruiterModule {}