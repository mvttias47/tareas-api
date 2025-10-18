// Aquí definimos la librería cliente de Prista para realizar operaciones en la base de datos supabase
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default prisma
