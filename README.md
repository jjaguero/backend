# Backend - NestJS API

Este proyecto es una API RESTful desarrollada con [NestJS](https://nestjs.com/) que permite operaciones CRUD conectadas a una base de datos MongoDB Atlas.

## Tecnologías

- [NestJS](https://nestjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [TypeScript](https://www.typescriptlang.org/)

---
### Requistos
- Node.js 18+  
- MongoDB Atlas
## Configuración local

### 1. Clonar repositorio

```bash
git clone https://github.com/jjaguero/backend.git
cd backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno
es importante crear un archivo .env en la carpeta raiz del proyecto y colocar los siguientes parametros:

```bash
DB_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<nombre-db>?retryWrites=true&w=majority
PORT=3001
```

### 4. Configurar variables de entorno

```bash
npm run start:dev
```

### Endpoints principales

| Método | Ruta            | Descripción         |
| ------ | --------------- | ------------------- |
| GET    | /empleados      | Listar empleados    |
| POST   | /empleados      | Crear empleado      |
| GET    | /empleados/\:id | Obtener empleado    |
| PUT    | /empleados/\:id | Actualizar empleado |
| DELETE | /empleados/\:id | Eliminar empleado   |

### API
Puedes usar Postman o Curl verificar que todo funciona bien
```bash
http://localhost:3001/empleados
```
esa es la URL para probar los metodos GET, POST, PUT, DELETE.



