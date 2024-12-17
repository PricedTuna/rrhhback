import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AprobarPermisoDto } from './dto/aprobar-permiso.dto';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { PermisoService } from './permiso.service';

@ApiTags('Permiso')
@Controller('permiso')
export class PermisoController {
  constructor(private readonly permisoService: PermisoService) {}

  @Post()
  create(@Body() createPermisoDto: CreatePermisoDto) {
    return this.permisoService.create(createPermisoDto);
  }

  @Get()
  findAll() {
    return this.permisoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permisoService.findOne(+id);
  }

  @Get('sesion-trabajo/:idSesionTrabajo')
  findBySesionTrabajo(@Param('idSesionTrabajo') idSesionTrabajo: string) {
    return this.permisoService.findBySesionTrabajo(+idSesionTrabajo);
  }

  @Get('empleado/:idEmpleado')
  findByEmpleado(@Param('idEmpleado') idEmpleado: string) {
    return this.permisoService.findByEmpleado(+idEmpleado);
  }

  @Patch('aprobar/:id')
  aprobarPermiso(
    @Param('id') id: string,
    @Body() aprobarPermiso: AprobarPermisoDto,
  ) {
    return this.permisoService.aprobarPermiso(+id, aprobarPermiso);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermisoDto: UpdatePermisoDto) {
    return this.permisoService.update(+id, updatePermisoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permisoService.remove(+id);
  }
}
