"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async findAll() {
        return await this.usuarioRepository.find();
    }
    async findOne(id) {
        const usuario = await this.usuarioRepository.findOne({ where: { id } });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
    async create(usuarioData) {
        console.log(usuarioData);
        const existingUsuario = await this.usuarioRepository.findOne({ where: { nombre: usuarioData.nombre } });
        if (existingUsuario) {
            throw new Error('Un usuario con este nombre ya existe.');
        }
        const usuario = this.usuarioRepository.create(usuarioData);
        return await this.usuarioRepository.save(usuario);
    }
    async update(id, usuarioData) {
        await this.findOne(id);
        await this.usuarioRepository.update(id, usuarioData);
        return await this.findOne(id);
    }
    async remove(id) {
        const usuario = await this.findOne(id);
        await this.usuarioRepository.remove(usuario);
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map