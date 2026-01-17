import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }
  private clientes: Cliente[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@mail.com', estado: 'Activo' },
    {
      id: 2,
      nombre: 'María López',
      email: 'maria@mail.com',
      estado: 'Inactivo',
    },
    {
      id: 3,
      nombre: 'Carlos Díaz',
      email: 'carlos@mail.com',
      estado: 'Activo',
    },
  ];

  constructor() {}

  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  eliminarCliente(id: number): Observable<boolean> {
    this.clientes = this.clientes.filter((c) => c.id !== id);
    return of(true);
  }
}
