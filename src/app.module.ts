import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // <- esta es la importación correcta
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, EstudiantesController],
  providers: [PrismaService],
})
export class AppModule {}
