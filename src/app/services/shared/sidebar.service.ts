import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Dominios',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'DashBoard', url: '/dashboard' },
        { titulo: 'Consultar', url: '/search' },
        { titulo: 'Historial', url: '/history' },
      ]
    }
  ];

  constructor() { }
}
