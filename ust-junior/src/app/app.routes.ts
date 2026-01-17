import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'clientes',
    loadComponent: () =>
      import('./components/clientes/clientes.component').then(
        (m) => m.ClientesComponent,
      ),
  },
  {
    path: 'formulario',
    loadComponent: () =>
      import('./components/formulario/formulario.component').then(
        (m) => m.FormularioComponent,
      ),
  },
];
