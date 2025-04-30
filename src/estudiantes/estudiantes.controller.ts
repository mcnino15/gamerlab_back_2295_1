// src/estudiantes/estudiantes.controller.ts
import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateIntegranteDto } from './dto/create-integrante.dto';
import { integrante } from '@prisma/client'; // Importa el tipo

@Controller('estudiantes') // Define la ruta base para este controlador: /estudiantes
export class EstudiantesController {
  // Inyecta el servicio para usar sus métodos
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post('addnew') // Endpoint para crear: POST /estudiantes
  async create(@Body() createIntegranteDto: CreateIntegranteDto): Promise<integrante> {
    // El decorador @Body() extrae el cuerpo de la solicitud
    // y NestJS (con ValidationPipe) puede validarlo usando el DTO
    return this.estudiantesService.create(createIntegranteDto);
  }

  @Get() // Endpoint para obtener todos: GET /estudiantes
  async findAll(): Promise<integrante[]> {
    return this.estudiantesService.findAll();
  }

  @Get(':id') // Endpoint para obtener uno por ID: GET /estudiantes/123
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<integrante | null> {
     // ParseIntPipe convierte el parámetro 'id' de string a número y valida si es un entero
    return this.estudiantesService.findOne(id);
  }

  // Puedes añadir endpoints para @Patch(':id') (actualizar) y @Delete(':id') (eliminar) aquí
}