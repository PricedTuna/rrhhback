import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { AuthModule } from './auth/auth.module';
import { AutoModule } from './auto/auto.module';
import { AutoempleadoModule } from './autoempleado/autoempleado.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { ContactobeneficiarioModule } from './contactobeneficiario/contactobeneficiario.module';
import { ContactoemergenciaModule } from './contactoemergencia/contactoemergencia.module';
import { ContratoModule } from './contrato/contrato.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DiasvacacionesModule } from './diasvacaciones/diasvacaciones.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { DomicilioempleadoModule } from './domicilioempleado/domicilioempleado.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { EstadoModule } from './estado/estado.module';
import { EstadocivilModule } from './estadocivil/estadocivil.module';
import { FrecuenciapagoModule } from './frecuenciapago/frecuenciapago.module';
import { LicenciamanejoModule } from './licenciamanejo/licenciamanejo.module';
import { MunicipioModule } from './municipio/municipio.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { PaisModule } from './pais/pais.module';
import { PermisoModule } from './permiso/permiso.module';
import { PuestoModule } from './puesto/puesto.module';
import { ResponseWrapperInterceptor } from './response-wrapper/response-wrapper.interceptor';
import { SucursalModule } from './sucursal/sucursal.module';
import { TipoasistenciaModule } from './tipoasistencia/tipoasistencia.module';
import { TipocontratoModule } from './tipocontrato/tipocontrato.module';
import { TipoempleadoModule } from './tipoempleado/tipoempleado.module';
import { TipolicenciamanejoModule } from './tipolicenciamanejo/tipolicenciamanejo.module';
import { TipopermisoModule } from './tipopermiso/tipopermiso.module';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3307,
    //   username: 'root',
    //   password: 'root',
    //   database: 'isback',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'], // Importa tus entidades aquí
    //   synchronize: true, // Solo para desarrollo, crea automáticamente tablas
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'isback',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Importa tus entidades aquí
      synchronize: true, // Solo para desarrollo, crea automáticamente tablas
    }),
    AsistenciaModule,
    AutoModule,
    AutoempleadoModule,
    CiudadModule,
    ContactobeneficiarioModule,
    ContactoemergenciaModule,
    ContratoModule,
    DepartamentoModule,
    DiasvacacionesModule,
    DomicilioModule,
    DomicilioempleadoModule,
    EmpleadoModule,
    EstadoModule,
    EstadocivilModule,
    FrecuenciapagoModule,
    LicenciamanejoModule,
    MunicipioModule,
    NacionalidadModule,
    PaisModule,
    PermisoModule,
    PuestoModule,
    SucursalModule,
    TipoasistenciaModule,
    TipocontratoModule,
    TipoempleadoModule,
    TipolicenciamanejoModule,
    TipopermisoModule,
    UsuarioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, // Mantienes tu AppService
    {
      provide: APP_INTERCEPTOR, // Token especial para interceptores globales
      useClass: ResponseWrapperInterceptor, // Tu interceptor personalizado
    },
  ],
})
export class AppModule {}
