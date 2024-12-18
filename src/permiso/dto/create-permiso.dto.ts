import { ApiProperty } from "@nestjs/swagger";
import { isNumber, IsNumber, IsString } from "class-validator";

export class CreatePermisoDto {
  @ApiProperty()
  @IsNumber()
  idTipoPermiso: number;
  
  @ApiProperty()
  @IsNumber()
  idEmpleado: number;
  
  @ApiProperty()
  @IsString()
  descripcion: string | null;
  
  @ApiProperty()
  @IsString()
  aprobado: boolean;
  
  @ApiProperty()
  @IsNumber()
  idSesionTrabajo: number | null;
  
  @ApiProperty()
  @IsNumber()
  idUsuarioAprobacion: number;
  
  @ApiProperty()
  @IsString()
  estatus: string;
}
