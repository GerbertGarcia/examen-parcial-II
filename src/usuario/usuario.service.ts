import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
  console.log(usuarioData); 
  const existingUsuario = await this.usuarioRepository.findOne({ where: { nombre: usuarioData.nombre } });
  if (existingUsuario) {
    throw new Error('Un usuario con este nombre ya existe.');
  }
  const usuario = this.usuarioRepository.create(usuarioData);
  return await this.usuarioRepository.save(usuario);
}


  async update(id: string, usuarioData: Partial<Usuario>): Promise<Usuario> {
    await this.findOne(id); 
    await this.usuarioRepository.update(id, usuarioData);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const usuario = await this.findOne(id); 
    await this.usuarioRepository.remove(usuario);
  }
}
