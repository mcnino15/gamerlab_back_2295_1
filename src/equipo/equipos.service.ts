// src/equipos/equipos.service.ts
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de que la ruta a tu PrismaService sea correcta
import { equipo } from '@prisma/client'; // Importa el tipo 'equipo' generado por Prisma
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Injectable()
export class EquiposService {
  constructor(private prisma: PrismaService) {}

  // Método para CREAR un nuevo equipo
  async create(createEquipoDto: CreateEquipoDto): Promise<equipo> {
    try {
      // Usa el cliente Prisma para crear un nuevo equipo
      const nuevoEquipo = await this.prisma.equipo.create({
        data: createEquipoDto, // Prisma mapea los datos del DTO a las columnas de la tabla
      });
      return nuevoEquipo;
    } catch (error) {
      console.error("Error al crear equipo:", error);
      // Podrías añadir manejo de errores específicos de Prisma aquí
      throw new InternalServerErrorException('No se pudo crear el equipo.');
    }
  }

  // Método para OBTENER todos los equipos (opcional, pero útil)
  async findAll(): Promise<equipo[]> {
    try {
      const equipos = await this.prisma.equipo.findMany();
      return equipos;
    } catch (error) {
      console.error("Error al buscar equipos:", error);
      throw new InternalServerErrorException('No se pudieron obtener los equipos.');
    }
  }

  // Método para OBTENER un equipo por ID (opcional, pero útil)
  async findOne(id: number): Promise<equipo | null> {
    const equipoEncontrado = await this.prisma.equipo.findUnique({
      where: { id_equipo: id },
    });
    if (!equipoEncontrado) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado.`);
    }
    return equipoEncontrado;
  }


  // Método para ACTUALIZAR un equipo por ID
  async update(id: number, updateEquipoDto: UpdateEquipoDto): Promise<equipo> {
    try {
      // Antes de actualizar, puedes verificar si el equipo existe si lo deseas,
      // pero Prisma lanzará un error si el ID no existe con el método update.
      const equipoActualizado = await this.prisma.equipo.update({
        where: { id_equipo: id },
        data: updateEquipoDto,
      });
      return equipoActualizado;
    } catch (error) {
       // Prisma lanza P2025 si el registro a actualizar no existe (Not Found)
       if (error.code === 'P2025') {
           throw new NotFoundException(`Equipo con ID ${id} no encontrado para actualizar.`);
       }
      console.error(`Error al actualizar equipo con ID ${id}:`, error);
      throw new InternalServerErrorException('No se pudo actualizar el equipo.');
    }
  }

  // Método para ELIMINAR un equipo por ID
  async remove(id: number): Promise<equipo> {
    try {
       // Prisma lanza P2025 si el registro a eliminar no existe (Not Found)
      const equipoEliminado = await this.prisma.equipo.delete({
        where: { id_equipo: id },
      });
      return equipoEliminado;
    } catch (error) {
       if (error.code === 'P2025') {
           throw new NotFoundException(`Equipo con ID ${id} no encontrado para eliminar.`);
       }
      console.error(`Error al eliminar equipo con ID ${id}:`, error);
      throw new InternalServerErrorException('No se pudo eliminar el equipo.');
    }
  }
}