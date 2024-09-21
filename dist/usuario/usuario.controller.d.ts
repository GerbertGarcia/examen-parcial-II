import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario>;
    create(usuarioData: CreateUsuarioDto): Promise<Usuario>;
    update(id: string, usuarioData: CreateUsuarioDto): Promise<Usuario>;
    remove(id: string): Promise<void>;
}
