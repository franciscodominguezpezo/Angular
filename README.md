


# 📘 Libros – Angular & Stephen King API

Aplicación desarrollada con **Angular** que consume una **API pública de Stephen King** para obtener un listado de libros y mostrarlos dinámicamente en la vista HTML.

El proyecto está enfocado a practicar:
- Consumo de APIs REST
- Uso de `HttpClient`
- Servicios en Angular
- Renderizado de datos en plantillas HTML

---

## 🚀 Funcionalidad principal

- 🔗 Consumo de una API externa
- 📡 Peticiones HTTP con `HttpClient`
- 🧩 Arquitectura basada en servicios
- 📄 Visualización de datos en el HTML mediante *data binding*

---

## 🌐 API utilizada

**Stephen King API (Books)**  
Endpoint utilizado:

https://stephen-king-api.onrender.com/api/books


# UST Junior Frontend Project

## 📌 Descripción

Este proyecto ha sido desarrollado como parte de mi postulación al puesto de **Desarrollador/a Frontend** en **UST**, orientado a demostrar conocimientos sólidos en **JavaScript, Angular y construcción de interfaces de usuario** siguiendo buenas prácticas de desarrollo frontend.

La aplicación simula una pequeña plataforma de gestión de clientes, enfocada en la capa de presentación, interacción con el usuario y organización del código.

---

## 🛠️ Tecnologías utilizadas

* **Angular (Standalone Components)**
* **TypeScript / JavaScript**
* **Bootstrap 5** (estilos y maquetación)
* **SweetAlert2** (feedback visual al usuario)
* **Arquitectura modular y componentes reutilizables**

---

## 🧩 Estructura del proyecto

El proyecto está organizado siguiendo una estructura clara y escalable:

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── home/        # Landing / presentación del proyecto
 │   │   ├── clientes/    # Listado de clientes
 │   │   └── formulario/  # Alta de nuevos clientes
 │   ├── core/
 │   │   └── services/    # Servicio mock de datos
 │   └── app.routes.ts    # Configuración de rutas
 └── main.ts              # Bootstrap de la aplicación
```

---

## 🏠 Home (Landing)

La aplicación cuenta con una **landing inicial** que contextualiza el proyecto y la postulación, permitiendo al usuario acceder a las funcionalidades principales mediante navegación.

---

## 👥 Gestión de clientes

* Visualización de un listado de clientes
* Alta de nuevos clientes mediante formulario
* Validación de campos obligatorios
* Feedback visual de errores y acciones exitosas

Los datos se gestionan mediante un **servicio mock**, simulando la interacción con un backend real.

---

## 🧪 Validaciones y UX

* Validación de formularios en lógica y vista
* Control de errores antes de persistir datos
* Mensajes claros al usuario mediante SweetAlert

---

## 🚀 Objetivo del proyecto

El objetivo principal es demostrar:

* Capacidad para **traducir requisitos y maquetas a código funcional**
* Construcción de la **capa de presentación**
* Uso de **Angular moderno (standalone)**
* Organización del código y buenas prácticas
* Enfoque en experiencia de usuario

---

## ▶️ Ejecución del proyecto

```bash
npm install
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

## 📌 Notas finales

Este proyecto está orientado a un contexto de evaluación técnica y puede ampliarse fácilmente con:

* Integración con backend real
* Autenticación y guards
* Formularios reactivos
* Testing unitario

---

Gracias por su tiempo y consideración.

**Paco**
Desarrollador Frontend Junior
