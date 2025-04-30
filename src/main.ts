// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Podrías tener configuraciones adicionales aquí (ej: GlobalPipes)
  await app.listen(3000); // <--- ¡Asegúrate de que sea el puerto 3000!
}
bootstrap();