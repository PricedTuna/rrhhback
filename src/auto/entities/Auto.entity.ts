import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AutoEmpleado } from 'src/autoempleado/entities/AutoEmpleado.entity';

@Index("numero_serie", ["numeroSerie"], { unique: true })
@Entity("autos", { schema: "bdrrhh" })
export class Auto {
  @PrimaryGeneratedColumn({ type: "int", name: "id_auto" })
  idAuto: number;

  @Column("varchar", { name: "nombre_modelo", length: 30 })
  nombreModelo: string;

  @Column("char", { name: "year_modelo", length: 4 })
  yearModelo: string;

  @Column("varchar", { name: "orden_registro", length: 30 })
  ordenRegistro: string;

  @Column("date", { name: "fecha_compra" })
  fechaCompra: string;

  @Column("varchar", { name: "numero_placas", length: 10 })
  numeroPlacas: string;

  @Column("char", { name: "numero_serie", unique: true, length: 17 })
  numeroSerie: string;

  @Column("varchar", { name: "numero_poliza", length: 20 })
  numeroPoliza: string;

  @Column("date", { name: "vencimiento_poliza" })
  vencimientoPoliza: string;

  @Column("char", { name: "estatus", length: 2, default: 'A' })
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

  @OneToMany(() => AutoEmpleado, (autosEmpleados) => autosEmpleados.idAuto2)
  autosEmpleados: AutoEmpleado[];
}
