import { Injectable } from '@nestjs/common';
import { CreateTipopermisoDto } from './dto/create-tipopermiso.dto';
import { UpdateTipopermisoDto } from './dto/update-tipopermiso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPermiso } from './entities/TipoPermiso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipopermisoService {
  constructor(
    @InjectRepository(TipoPermiso)
    private readonly tipoPermisoRepository: Repository<TipoPermiso>,
  ) {}

  async create(createTipopermisoDto: CreateTipopermisoDto): Promise<TipoPermiso> {
    const newTipoPermiso = this.tipoPermisoRepository.create(createTipopermisoDto);
    return await this.tipoPermisoRepository.save(newTipoPermiso);
  }

  async findAll(): Promise<TipoPermiso[]> {
    return await this.tipoPermisoRepository.find();
  }

  async findOne(id: number): Promise<TipoPermiso> {
    return await this.tipoPermisoRepository.findOne({ where: { idTipoPermiso: id } });
  }

  async update(id: number, updateTipopermisoDto: UpdateTipopermisoDto): Promise<TipoPermiso> {
    await this.tipoPermisoRepository.update(id, updateTipopermisoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tipoPermisoRepository.delete(id);
  }
}
