// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Opcional: Prisma se conecta bajo demanda, pero puedes forzar una conexión aquí si es necesario.
    // await this.$connect();
    console.log('Prisma Client Connected');
  }

  async onModuleDestroy() {
    // Cierra la conexión cuando la aplicación se detiene
    await this.$disconnect();
    console.log('Prisma Client Disconnected');
  }

  // Puedes agregar métodos personalizados aquí si necesitas limpieza específica,
  // como eliminar relaciones antes de borrar un registro, aunque Prisma
  // maneja muchas restricciones a nivel de base de datos si están definidas en el schema.
}