## Tareas API – Backend (Node.js + Next.js API Routes + Prisma)

Este proyecto consiste en la implementación de una **API REST** que permite crear y listar tareas almacenadas en una base de datos PostgreSQL.

---

## Descripción General

La API fue desarrollada con **Node.js**, **Next.js 15 (API Routes)** y **Prisma ORM**, siguiendo buenas prácticas de estructura y modularidad.  
Expone dos endpoints principales:

- **GET /api/tareas** → Devuelve la lista de tareas.  
- **POST /api/tareas** → Crea una nueva tarea en la base de datos.

El backend se encuentra desplegado en **Vercel**, de modo que puede ser consumido directamente por el frontend del Ejercicio 2.

---

## Tecnologías Utilizadas

- **Next.js 15** – Framework React con soporte para rutas de API.  
- **Node.js 20** – Entorno de ejecución para el servidor.  
- **Prisma ORM** → Cliente de base de datos tipado y eficiente para PostgreSQL.  
- **Supabase** → Plataforma de base de datos en la nube usada como hosting de PostgreSQL.
- - **PostgreSQL** → Motor de base de datos relacional.  
- **Vitest** – Framework para pruebas.  
- **Vercel** – Plataforma de despliegue en la nube.  

---

## Endpoints Principales

| Método | Ruta | Descripción | Body Ejemplo |
|:--|:--|:--|:--|
| GET | `/api/tareas` | Lista todas las tareas registradas. | – |
| POST | `/api/tareas` | Crea una nueva tarea. | `{ "titulo": "Informe Gestión de Proyectos" }` |

**Respuesta esperada (200 OK):**
```json
{
  "id": "1",
  "titulo": "Informe Gestión de Proyectos",
  "completada": false,
  "createdAt": "2025-10-18T18:00:00.000Z"
}
```
## Instrucciones de Instalación y Ejecución Local
```bash
git clone https://github.com/mvttias47/tareas-api.git
cd tareas-api
```
## Instalar dependencias
```bash
npm install
```
## Configurar variables de entorno
```bash
Crea un archivo .env en la raíz del proyecto con la siguiente configuración:

DATABASE_URL="postgresql://usuario:contraseña@db.supabase.co:5432/postgres"


CORS_ORIGIN="https://tareas-app-ten.vercel.app"

#La variable DATABASE_URL se obtiene desde el panel de Supabase
```
## Generar el cliente prisma
```bash
npx prisma generate
```
## Ejecutar en modo desarrollo
```bash
npm run dev
```
## Probar la API
```bash
# Prueba con una solicitud del tipo curl para insertar una tarea
curl -X POST http://localhost:3000/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Ingresa el nombre de tu tarea"}'

```

## Ejecutar las pruebas
```bash
npm run test
```
## En caso de algún error importante usar la versión correspondiente
```bash
nvm use 20
npm run test
```

## Decisiones técnicas tomadas:
1. Se utilizó Nextjs.js debido a **API Routes**, porque permite definir endpoints directamente dentro del framework (backend ligero) y facilita el despliegue en Vercel.
2. Se eligió prisma ORM para interacturar con la base de datos de Supabase, debido a su compatibilidad con PostgreSQL facilitando un desarrollo mucho más rápido con tipado seguro.
3. Se decidió usar Supabase para evitar configuraciones locales y contar con una base de datos persistente y accesible desde cualquier entorno.
4. Se incorporó Vitest para realizar pruebas automatizadas validando la lógica de negocio sin depender de la base de datos.
5. Vercel se ligió como plataforma de despliegue por su integración directa con GitHub y soporte nativo para funciones serverless.



