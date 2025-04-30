// src/estudiantes/estudiantes.module.ts
import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Module({
  controllers: [EstudiantesController],
  // Asegúrate de que PrismaService esté disponible para EstudiantesService
  providers: [EstudiantesService, PrismaService],
})
export class EstudiantesModule {}