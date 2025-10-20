import { NextResponse } from 'next/server';
import { listarTareas, crearTarea } from '@/metodos/tareas';

export const runtime = 'nodejs'; 

const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.CORS_ORIGIN ?? '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() { // aqui se define el metodo GET que lista las tareas
  try {
    const tasks = await listarTareas();
    return NextResponse.json(tasks, { status: 200, headers: CORS_HEADERS });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? 'Error' },
      { status: 500, headers: CORS_HEADERS },
    );
  }
}

export async function POST(req: Request) { //Aqui definimos el metodo POST que crea una nueva tarea
  try {
    const body = await req.json();
    const titulo = String(body?.titulo ?? '').trim();
    const task = await crearTarea(titulo);
    return NextResponse.json(task, { status: 201, headers: CORS_HEADERS });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? 'Bad Request' },
      { status: 400, headers: CORS_HEADERS },
    );
  }
}
