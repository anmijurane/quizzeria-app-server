import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SeedDto } from 'src/common/dto/seed.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  /**THIS IS A PRIVATE*/
  @Post()
  create() {}

  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }

  @Post('/seed')
  seed(@Body() seedSubject: SeedDto) {
    return this.subjectsService.seedExecute(seedSubject.currentMinutes);
  }

  /**
   * POST: crear un item nuevo | Debe tener otro Rol
   * DELETE: elimina el item | Debe tener oro rol
   * PATCH: Actualiza el nombre
   */
}
