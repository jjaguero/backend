import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Empleado } from './schemas/empleados.schema';

@Injectable()
export class EmpleadosService {
  constructor(@InjectModel(Empleado.name) private empleadoModel: Model<Empleado>) {}


  async create(createEmpleadoDto: any): Promise<Empleado> {
    const nuevoEmpleado = new this.empleadoModel(createEmpleadoDto);
    return nuevoEmpleado.save();
  }


  async findAll(): Promise<Empleado[]> {
    return this.empleadoModel.find().exec();
  }


  async findOne(id: string): Promise<Empleado> {
    return this.empleadoModel.findById(id).exec();
  }


  async update(id: string, updateEmpleadoDto: any): Promise<Empleado> {
    return this.empleadoModel.findByIdAndUpdate(
      id, 
      updateEmpleadoDto, 
      { new: true } 
    ).exec();
  }


  async remove(id: string): Promise<Empleado> {
    return this.empleadoModel.findByIdAndDelete(id).exec();
  }
}