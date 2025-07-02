import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) 
export class Empleado extends Document {
  @Prop({
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  })
  nombre: string;

  @Prop({
    type: String,
    required: [true, 'La posición es obligatoria'],
    trim: true
  })
  posicion: string;

  @Prop({
    type: Number,
    required: [true, 'El salario es obligatorio'],
    min: [0, 'El salario debe ser mayor a 0']
  })
  salario: number;

  @Prop({
    type: String,
    required: [true, 'El sexo es obligatorio'],
    enum: {
      values: ['M', 'F'],
      message: 'El sexo debe ser M o F'
    }
  })
  sexo: string;

  @Prop({
    type: Date,
    required: [true, 'La fecha de ingreso es obligatoria'],
    default: Date.now
  })
  fechaIngreso: Date;
}

export const EmpleadoSchema = SchemaFactory.createForClass(Empleado);