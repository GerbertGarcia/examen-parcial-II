import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  usuario: string;

  @Column({ length: 100 })
  nombre: string;
  
  @Column({ length: 16 })
  contrasenia: string;
  
  @Column({ length: 100 })
  correo: string;
  
  @Column({ length: 8 })
  telefono: string;
  
  @Column({ length: 100 })
  foto: string;
}