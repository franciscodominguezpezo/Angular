import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService, Cliente } from '../../core/services/api.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  nuevoCliente: Partial<Cliente> = {
    nombre: '',
    email: '',
    estado: 'Activo',
  };

  constructor(private api: ApiService) {}

  guardarCliente() {
    // 1️⃣ Validar campos
    if (!this.camposValidos()) {
      return;
    }

    // 2️⃣ Generar ID nuevo (mock)
    const id = Math.floor(Math.random() * 1000) + 10;
    const cliente: Cliente = { id, ...this.nuevoCliente } as Cliente;

    // 3️⃣ Guardar cliente
    this.api.agregarCliente(cliente);

    // 4️⃣ Feedback éxito
    Swal.fire('¡Éxito!', `${cliente.nombre} ha sido añadido`, 'success');

    // 5️⃣ Reset formulario
    this.nuevoCliente = { nombre: '', email: '', estado: 'Activo' };
  }

  // 🔒 Validaciones
  private camposValidos(): boolean {
    const { nombre, email, estado } = this.nuevoCliente;

    if (!nombre || nombre.trim().length < 3) {
      Swal.fire(
        'Error',
        'El nombre es obligatorio y debe tener al menos 3 caracteres',
        'error',
      );
      return false;
    }

    if (!email || !this.emailValido(email)) {
      Swal.fire('Error', 'Debes introducir un email válido', 'error');
      return false;
    }

    if (!estado) {
      Swal.fire('Error', 'El estado del cliente es obligatorio', 'error');
      return false;
    }

    return true;
  }

  // 📧 Validación de email
  private emailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
