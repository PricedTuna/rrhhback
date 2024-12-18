import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { Usuario } from 'src/usuario/entities/Usuario.entity';
import { Asistencia } from 'src/asistencia/entities/Asistencia.entity';
import { Permiso } from 'src/permiso/entities/Permiso.entity';

@Entity('sesiones_trabajo', { schema: 'bdrrhh' })
export class SesionTrabajo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_sesion_trabajo' })
  idSesionTrabajo: number;

  @Column('varchar', { name: 'sesion_token', length: 30 })
  sesionToken: string;

  @Column('timestamp', {
    name: 'create_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDate: Date | null;

  @Column('timestamp', {
    name: 'finalized_date',
    nullable: true,
  })
  finalizedDate: Date;

  @Index()
  @Column('int', { name: 'id_usuario' })
  idUsuario: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' })
  usuario?: Usuario;

  @OneToMany(() => Asistencia, (asistencia) => asistencia.sesionTrabajo, {
    cascade: true,
  })
  asistencias: Asistencia[];

  @OneToMany(() => Permiso, (permiso) => permiso.sesionTrabajo, {
    cascade: true,
  })
  permisos: Permiso[];
}
