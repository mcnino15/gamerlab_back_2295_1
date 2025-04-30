// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// No necesitas importar EstudiantesController aquí directamente
// import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { PrismaService } from './prisma/prisma.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module'; // Importa el nuevo módulo
import { EquiposModule } from './equipo/equipos.module';

@Module({
  imports: [EstudiantesModule, EquiposModule], // Añade EstudiantesModule a los imports
  controllers: [AppController], // Manten el AppController si lo usas para algo más
  providers: [], // PrismaService ahora se provee en EstudiantesModule, no es necesario aquí si solo se usa allí
                 // Si otros módulos necesitan PrismaService, déjalo aquí o crea un PrismaModule dedicado.
                 // Por simplicidad y dado que AppModule no usa directamente PrismaService, lo quitamos.
                 // Si AppController necesitara PrismaService, deberías añadir PrismaService a los providers aquí también.
})
export class AppModule {}