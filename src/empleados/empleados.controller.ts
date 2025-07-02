import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { Empleado } from './schemas/empleados.schema';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() empleado: Empleado) {
    return this.empleadosService.create(empleado);
  }

  @Get()
  async findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.empleadosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() empleado: Empleado) {
    return this.empleadosService.update(id, empleado);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.empleadosService.remove(id);
  }
}