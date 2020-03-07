import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@app/shared';
import { CandidateRoutingModule } from './candidate-routing.module';

@NgModule({
  declarations: [CandidateComponent],
  imports: [CommonModule,NgbModule,SharedModule,CandidateRoutingModule]
})
export class CandidateModule {}