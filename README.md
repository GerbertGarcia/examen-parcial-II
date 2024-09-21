# Gestión de Usuarioos - NestJS

Esta es una aplicación de gestión de usuarioos desarrollada con NestJS, TypeORM, y SQLite. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre usuarioos. Este proyecto está pensado como una práctica para aprender a utilizar NestJS y TypeORM.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Uso de la API](#uso-de-la-api)
- [Ejemplos de Peticiones](#ejemplos-de-peticiones)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone <>
   cd gestion-usuarioos
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Configurar la base de datos: La aplicación está configurada para usar SQLite por defecto. No se requieren configuraciones adicionales.

## Ejecutar la Aplicación

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm run start
```

La aplicación se ejecutará en `http://localhost:3000`.

## Uso de la API

La aplicación expone los siguientes endpoints para manejar los usuarioos:

- **GET /usuarios:** Obtener todos los usuarioos.
- **GET /usuarios/:id:** Obtener un usuarioo por ID.
- **POST /usuarios:** Crear un nuevo usuarioo.
- **PUT /usuarios/:id:** Actualizar un usuarioo existente.
- **DELETE /usuarios/:id:** Eliminar un usuarioo.

### Ejemplos de Peticiones

#### Crear un Usuarioo (POST /usuarios)

URL: `http://localhost:3000/usuarios`

Cuerpo de la solicitud:
```json
{
    "usuario": "prueba1",
    "nombre": "nombre_prueba",
    "contrasenia": "12345678",
    "correo": "prueba1@email.com",
    "telefono": "12345678",
    "foto":"ruta/carpeta/foto1.jpg"
}
```

#### Obtener Todos los Usuarioos (GET /usuarios)

URL: `http://localhost:3000/usuarios`

Respuesta esperada:
```json
[
  {
    "id": "uuid",
    "usuario": "prueba1",
    "nombre": "nombre_prueba",
    "contrasenia": "12345678",
    "correo": "prueba1@email.com",
    "telefono": "12345678",
    "foto":"ruta/carpeta/foto1.jpg"
  }
]
```

#### Obtener un Usuarioo por ID (GET /usuarios/:id)

URL: `http://localhost:3000/usuarios/<id>`

Respuesta esperada:
```json
{
  "id": "uuid",
  "usuario": "prueba1",
    "nombre": "nombre_prueba",
    "contrasenia": "12345678",
    "correo": "prueba1@email.com",
    "telefono": "12345678",
    "foto":"ruta/carpeta/foto1.jpg"
}
```

#### Actualizar un Usuarioo (PUT /usuarios/:id)

URL: `http://localhost:3000/usuarios/<id>`

Cuerpo de la solicitud:
```json
{
  "usuario": "prueba1",
    "nombre": "nombre_prueba",
    "contrasenia": "12345678",
    "correo": "prueba1@email.com",
    "telefono": "12345678",
    "foto":"ruta/carpeta/foto1.jpg"
}
```

#### Eliminar un Usuarioo (DELETE /usuarios/:id)

URL: `http://localhost:3000/usuarios/<id>`

## Tecnologías Utilizadas

- **NestJS:** Framework para construir aplicaciones del lado del servidor.
- **TypeORM:** ORM para interactuar con la base de datos.
- **SQLite:** Base de datos ligera utilizada en desarrollo.
- **class-validator:** Para validar los datos de las solicitudes.
- **Postman:** Para probar los endpoints de la API.

## Notas Adicionales

- Asegúrate de que el servidor esté en ejecución antes de realizar las pruebas con Postman u otra herramienta de pruebas.
- La base de datos SQLite se genera automáticamente en la raíz del proyecto.
- En un entorno de producción, es recomendable usar una base de datos más robusta como PostgreSQL o MySQL.

## Autor

Este proyecto fue desarrollado por Gerbert García como parte de una práctica para aprender a utilizar NestJS y TypeORM.

## Licencia

Este proyecto se distribuye bajo la [MIT License](LICENSE).
