import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { HistoryComponent } from './domain/history/history.component';
import { SearchComponent } from './domain/search/search.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [],
        children: [
            { path: 'dashboard', component: DasboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Cuenta' } },
            { path: 'search', component: SearchComponent, data: { titulo: 'Consulta de dominio' } },
            { path: 'history', component: HistoryComponent, data: { titulo: 'Historial de Búsqueda' } },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }