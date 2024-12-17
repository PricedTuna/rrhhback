import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { ApiTags } from '@nestjs/swagger';

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
    @Body('idUsuarioAprobacion') idUsuarioAprobacion: number,
  ) {
    return this.permisoService.aprobarPermiso(+id, idUsuarioAprobacion);
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
