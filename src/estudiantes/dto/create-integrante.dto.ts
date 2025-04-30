// src/estudiantes/dto/create-integrante.dto.ts
import { IsString, IsEmail, IsInt, IsBoolean, IsNotEmpty } from 'class-validator'; // Necesitarás instalar class-validator y class-transformer

export class CreateIntegranteDto {
  @IsInt()
  @IsNotEmpty()
  id_equipo: number; // Necesitas el ID del equipo al que pertenece

  @IsString()
  @IsNotEmpty()
  primer_nombre: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  usuario_github: string;

  @IsBoolean()
  estado: boolean; // El estado al crear

  // id_integrante, fecha_creacion, fecha_actualizacion son gestionados por la BD/Prisma
}