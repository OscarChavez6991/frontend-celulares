import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Base'
    },
    children: [
        {
          path: '',
          redirectTo: 'cards',
          pathMatch: 'full'
        },
        {
          path: 'celular',
          loadComponent: () => import('./celular/celular.component').then(m => m.CelularComponent),
          data: {
            title: 'Celular'
          }
        },
        {
            path: 'reportes',
            loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
            data: {
              title: 'Reportes'
            }
        },

    ]
    }
]