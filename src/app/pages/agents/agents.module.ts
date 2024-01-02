import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentsPageRoutingModule } from './agents-routing.module';

import { AgentsPage } from './agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentsPageRoutingModule
  ],
  declarations: [AgentsPage]
})
export class AgentsPageModule {}
