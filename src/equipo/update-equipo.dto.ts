// src/equipos/dto/update-equipo.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoDto } from './dto/create-equipo.dto';

// PartialType hace que todas las propiedades de CreateEquipoDto sean opcionales
export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {}