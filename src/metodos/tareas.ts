import prisma from '@/lib/prisma';
// aquí definimos los métodos para listar y crear tareas en la base de datos
// exportamos las funciones para ser usadas en otras partes de la app
export async function listarTareas() {
  return prisma.tarea.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function crearTarea(titulo: string) {
  if (!titulo || !titulo.trim()) {
    throw new Error('Debe Agregar un Titulo');
  }
  return prisma.tarea.create({
    data: { titulo: titulo.trim() },
  });
}
