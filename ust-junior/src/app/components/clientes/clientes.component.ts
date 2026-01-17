import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ApiService, Cliente } from '../../core/services/api.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.api.getClientes().subscribe((data) => (this.clientes = data));
  }

  eliminarCliente(cliente: Cliente) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Eliminar a ${cliente.nombre} de la lista`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.eliminarCliente(cliente.id).subscribe(() => {
          Swal.fire(
            'Eliminado!',
            `${cliente.nombre} ha sido eliminado.`,
            'success',
          );
          this.cargarClientes();
        });
      }
    });
  }
}
