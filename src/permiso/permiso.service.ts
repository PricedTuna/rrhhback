import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { Permiso } from './entities/Permiso.entity';
import { AprobarPermisoDto } from './dto/aprobar-permiso.dto';

@Injectable()
export class PermisoService {
  constructor(
    @InjectRepository(Permiso)
    private readonly permisoRepository: Repository<Permiso>,
  ) {}

  async create(createPermisoDto: CreatePermisoDto): Promise<Permiso> {
    const nuevoPermiso = this.permisoRepository.create(createPermisoDto);
    return this.permisoRepository.save(nuevoPermiso);
  }

  async findAll(): Promise<Permiso[]> {
    return this.permisoRepository.find();
  }

  async findOne(id: number): Promise<Permiso> {
    const permiso = await this.permisoRepository.findOne({ where: { idPermiso: id } });
    if (!permiso) {
      throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    }
    return permiso;
  }

  async findBySesionTrabajo(idSesionTrabajo: number): Promise<Permiso[]> {
    return this.permisoRepository.find({
      where: { idSesionTrabajo },
    });
  }

  async findByEmpleado(idEmpleado: number): Promise<Permiso[]> {
    return this.permisoRepository.find({
      where: { idEmpleado },
    });
  }

  async aprobarPermiso(id: number, aprobarPermiso: AprobarPermisoDto): Promise<Permiso> {
    const permiso = await this.findOne(id);
    permiso.aprobado = true;
    permiso.idUsuarioAprobacion = aprobarPermiso.idUsuarioAprobacion;
    return this.permisoRepository.save(permiso);
  }

  async update(id: number, updatePermisoDto: UpdatePermisoDto): Promise<Permiso> {
    const permiso = await this.findOne(id);
    Object.assign(permiso, updatePermisoDto);
    return this.permisoRepository.save(permiso);
  }

  async remove(id: number): Promise<void> {
    const permiso = await this.findOne(id);
    await this.permisoRepository.remove(permiso);
  }
}
