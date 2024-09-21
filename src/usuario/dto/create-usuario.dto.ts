import { IsString, IsNumber, MinLength, IsOptional, Min } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(3)
  usuario: string;

  @IsString()
  @MinLength(3)
  nombre: string;
  
  @IsString()
  @MinLength(8)
  contrasenia: string;
  
  @IsString()
  @MinLength(3)
  correo: string;
  
  @IsString()
  @MinLength(8)
  telefono: string;
  
  @IsString()
  @MinLength(3)
  foto: string;
}