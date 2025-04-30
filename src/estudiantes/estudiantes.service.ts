// src/estudiantes/estudiantes.service.ts
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { integrante } from '@prisma/client'; // Importa el tipo generado por Prisma
import { CreateIntegranteDto } from './dto/create-integrante.dto'; // Crearemos este DTO a continuación

@Injectable()
export class EstudiantesService {
  // Inyecta PrismaService para poder usarlo
  constructor(private prisma: PrismaService) {}

  async create(createIntegranteDto: CreateIntegranteDto): Promise<integrante> {
    try {
      // Usa el cliente Prisma para crear un nuevo integrante
      const nuevoIntegrante = await this.prisma.integrante.create({
        data: createIntegranteDto,
      });
      return nuevoIntegrante;
    } catch (error) {
      // Manejo básico de errores (podría ser más específico)
      console.error("Error al crear integrante:", error);
      // Podrías verificar errores específicos de Prisma (ej: violación de clave única, clave foránea)
      throw new InternalServerErrorException('No se pudo crear el integrante.');
    }
  }

  async findAll(): Promise<integrante[]> {
    try {
      // Usa el cliente Prisma para obtener todos los integrantes
      const integrantes = await this.prisma.integrante.findMany();
      return integrantes;
    } catch (error) {
       console.error("Error al buscar integrantes:", error);
       throw new InternalServerErrorException('No se pudieron obtener los integrantes.', error);
    }
  }

  async findOne(id: number): Promise<integrante | null> {
    const integrante = await this.prisma.integrante.findUnique({
      where: { id_integrante: id },
    });
    if (!integrante) {
      throw new NotFoundException(`Integrante con ID ${id} no encontrado.`);
    }
    return integrante;
  }

  // Puedes añadir métodos para actualizar (update) y eliminar (remove) aquí
}