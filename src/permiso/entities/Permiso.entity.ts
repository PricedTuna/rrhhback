import { Empleado } from "src/empleado/entities/Empleado.entity";
import { SesionTrabajo } from "src/sesion-trabajo/entities/sesion-trabajo.entity";
import { TipoPermiso } from "src/tipopermiso/entities/TipoPermiso.entity";
import { Usuario } from "src/usuario/entities/Usuario.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("id_empleado", ["idEmpleado"], {})
@Index("id_usuario_aprobacion", ["idUsuarioAprobacion"], {})
@Index("id_tipo_permiso", ["idTipoPermiso"], {})
@Entity("permisos", { schema: "bdrrhh" })
export class Permiso {
  @PrimaryGeneratedColumn({ type: "int", name: "id_permiso" })
  idPermiso: number;

  @Column("tinyint", { name: "id_tipo_permiso" })
  idTipoPermiso: number;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

  @Column("varchar", { name: "descripcion", nullable: true, length: 50 })
  descripcion: string | null;

  @Column("bool", { name: "aprobado" })
  aprobado: string;

  @Column("int", { name: "id_sesion_trabajo", nullable: true })
  idSesionTrabajo: number | null;

  @Column("int", { name: "id_usuario_aprobacion" })
  idUsuarioAprobacion: number;

  @Column("char", { name: "estatus", length: 2 })
  estatus: string;

  @Column("timestamp", {
    name: "create_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createDate: Date | null;

  @Column("timestamp", {
    name: "update_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateDate: Date | null;

  @ManyToOne(() => TipoPermiso, (tiposPermisos) => tiposPermisos.permisos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_tipo_permiso", referencedColumnName: "idTipoPermiso" },
  ])
  idTipoPermiso2: TipoPermiso;

  @ManyToOne(() => Empleado, (empleados) => empleados.permisos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;

  @ManyToOne(() => Usuario, (usuarios) => usuarios.permisosAprobados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_usuario_aprobacion", referencedColumnName: "idUsuario" },
  ])
  idUsuarioAprobacion2: Usuario;

  @ManyToOne(() => SesionTrabajo, (sesionTrabajo) => sesionTrabajo.permisos, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_sesion_trabajo", referencedColumnName: "idSesionTrabajo" }])
  sesionTrabajo: SesionTrabajo;
}
