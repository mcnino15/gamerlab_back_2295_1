// src/equipos/equipos.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common'; // Importa los decoradores necesarios
import { EquiposService } from './equipos.service'; // Importa el servicio
import { CreateEquipoDto } from './dto/create-equipo.dto'; // Importa DTO de creación
import { UpdateEquipoDto } from './dto/update-equipo.dto'; // Importa DTO de actualización
import { equipo } from '@prisma/client'; // Importa el tipo 'equipo' de Prisma

@Controller('equipos') // Ruta base para este controlador: /equipos
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  // Endpoint para CREAR un equipo: POST /equipos
  @Post()
  async create(@Body() createEquipoDto: CreateEquipoDto): Promise<equipo> {
    return this.equiposService.create(createEquipoDto);
  }

  // Endpoint para OBTENER todos los equipos: GET /equipos
  @Get()
  async findAll(): Promise<equipo[]> {
    return this.equiposService.findAll();
  }

  // Endpoint para OBTENER un equipo por ID: GET /equipos/:id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<equipo | null> {
    // ParseIntPipe convierte el ID de string a número y valida que sea un entero
    return this.equiposService.findOne(id);
  }

  // Endpoint para ACTUALIZAR un equipo por ID: PATCH /equipos/:id
  @Patch(':id') // Usa PATCH para actualizaciones parciales
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateEquipoDto: UpdateEquipoDto): Promise<equipo> {
    // @Body() updateEquipoDto contendrá solo los campos que se desean actualizar
    return this.equiposService.update(id, updateEquipoDto);
  }

  // Endpoint para ELIMINAR un equipo por ID: DELETE /equipos/:id
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<equipo> {
    return this.equiposService.remove(id);
  }
}