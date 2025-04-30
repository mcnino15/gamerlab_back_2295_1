export class CreateEquipoDto {
    // El id_equipo, fecha_creacion y fecha_actualizacion son generados por la DB/Prisma, no los incluimos aquí
  
    // @IsNotEmpty() // Ejemplo de validación: no puede estar vacío
    // @IsString()  // Ejemplo de validación: debe ser una cadena
    nombre: string;
  
    // @IsNotEmpty()
    // @IsString()
    token_captcha: string; // Nota: Considera cómo manejarías un captcha real
  
    // @IsBoolean()
    estado_incripcion: boolean;
  
    // @IsBoolean()
    estado: boolean; // Campo 'estado' del esquema
  }