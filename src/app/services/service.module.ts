import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebarService} from './services.index';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService
  ]
})
export class ServiceModule { }
