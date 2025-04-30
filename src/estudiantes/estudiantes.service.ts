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
      console.log("Intentando crear integrante en DB con datos:", createIntegranteDto); // Opcional: log

      // Usa el cliente Prisma para crear un nuevo integrante en la tabla 'integrante'
      const nuevoIntegrante = await this.prisma.integrante.create({
        data: createIntegranteDto, // Prisma toma los datos del DTO y los mapea a las columnas de la tabla
      });

      console.log("Integrante creado exitosamente:", nuevoIntegrante); // Opcional: log
      return nuevoIntegrante; // Devuelve el objeto integrante creado (con su ID asignado)

    } catch (error) {
      console.error("Error al crear integrante en el servicio:", error);
      // Aquí podrías añadir lógica más sofisticada para manejar errores específicos de Prisma (ej: P2002 para duplicados)
      // Por ahora, lanza una excepción genérica de servidor interno
      throw new InternalServerErrorException('No se pudo crear el integrante.', error.message);
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