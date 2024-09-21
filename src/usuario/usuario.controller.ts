import { Controller, Get, Post, Put, Delete, Body, Param, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Usuario> {
    return await this.usuarioService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() usuarioData: CreateUsuarioDto): Promise<Usuario> {
    return await this.usuarioService.create(usuarioData);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() usuarioData: CreateUsuarioDto, // Usando el mismo DTO para la actualización
  ): Promise<Usuario> {
    return await this.usuarioService.update(id, usuarioData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return await this.usuarioService.remove(id);
  }
}