// src/equipos/equipos.module.ts
import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de la ruta

@Module({
  controllers: [EquiposController],
  providers: [EquiposService, PrismaService], // PrismaService debe estar disponible
  exports: [EquiposService] // Exporta el servicio si otros módulos lo necesitan
})
export class EquiposModule {}