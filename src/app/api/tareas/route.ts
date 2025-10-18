import { NextResponse } from 'next/server';
import { listarTareas, crearTarea } from '@/metodos/tareas';


const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',                 
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};


export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}


export async function GET() { // Get para obtener la lista de tareas
  const tasks = await listarTareas(); // llama a la base de datos con la  funcion definida en metodos/tareas
  return NextResponse.json(tasks);
}

export async function POST(req: Request) { //post para crear una nueva tarea
  try {
    const body = await req.json();
    const task = await crearTarea(body.titulo);
    return NextResponse.json(task, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Error en la solicitud' }, { status: 400 });
  }
}
