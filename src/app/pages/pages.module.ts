import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard/dasboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SearchComponent } from './domain/search/search.component';
import { HistoryComponent } from './domain/history/history.component';


@NgModule({
  declarations: [
    PagesComponent,
    DasboardComponent,
    AccountSettingsComponent,
    SearchComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
