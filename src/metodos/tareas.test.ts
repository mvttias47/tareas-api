import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as prismaModule from '../lib/prisma'; 
import { listarTareas, crearTarea } from './tareas';

describe('metodos/tareas', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('listarTareas retorna arreglo ordenado', async () => {
    
    vi.spyOn(prismaModule, 'default', 'get').mockReturnValue({
      tarea: {
        findMany: vi.fn().mockResolvedValue([
          { id: '1', titulo: 'Hola', completada: false, createdAt: new Date() },
        ]),
      },
    } as any);

    const res = await listarTareas();
    expect(res).toHaveLength(1);
    expect(res[0].titulo).toBe('Hola');
  });

  it('crearTarea valida titulo vacío', async () => {
    await expect(crearTarea('')).rejects.toThrow('Debe agregar un titulo');
    await expect(crearTarea('   ')).rejects.toThrow('debe agregar un titulo');
  });

  it('crearTarea inserta en base de datos ', async () => {
    const createMock = vi.fn().mockResolvedValue({
      id: '2',
      titulo: 'Nueva',
      completada: false,
      createdAt: new Date(),
    });

    vi.spyOn(prismaModule, 'default', 'get').mockReturnValue({
      tarea: { create: createMock },
    } as any);

    const res = await crearTarea('  Nueva ');
    expect(createMock).toHaveBeenCalledWith({ data: { titulo: 'Nueva' } });
    expect(res.titulo).toBe('Nueva');
  });
});
