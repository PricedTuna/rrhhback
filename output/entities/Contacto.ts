import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from "./Empleado";

@Entity("contactos", { schema: "isback" })
export class Contacto {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email_laboral", nullable: true, length: 100 })
  emailLaboral: string | null;

  @Column("varchar", { name: "email_personal", nullable: true, length: 100 })
  emailPersonal: string | null;

  @Column("char", { name: "num_cel_laboral", nullable: true, length: 10 })
  numCelLaboral: string | null;

  @Column("char", { name: "num_cel_personal", length: 10 })
  numCelPersonal: string;

  @Column("timestamp", {
    name: "createdate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdate: Date | null;

  @Column("timestamp", {
    name: "updatedate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedate: Date | null;

  @OneToMany(() => Empleado, (empleados) => empleados.idContacto2)
  empleados: Empleado[];
}
