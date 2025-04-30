import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Controller('estudiantes')
export class EstudiantesController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAll() {
    return await this.prisma.integrante.findMany();
  }

  @Post()
  async create(@Body() data: any) {
    return await this.prisma.integrante.create({
      data,
    });
  }
}
