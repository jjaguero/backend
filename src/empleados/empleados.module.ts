import { Module } from '@nestjs/common';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadoSchema } from './schemas/empleados.schema';
import { Empleado } from './schemas/empleados.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Empleado.name, schema: EmpleadoSchema }])
  ],
  controllers: [EmpleadosController],
  providers: [EmpleadosService]
})
export class EmpleadosModule {}