import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';
import { SeancesService } from './seances.service';

@Controller('seances')
@ApiTags('seats')
@ApiBearerAuth('access_token')
export class SeancesController {
  constructor(private readonly seancesService: SeancesService) {}

  @Post()
  create(@Body() createSeanceDto: CreateSeanceDto) {
    return this.seancesService.create(createSeanceDto);
  }

  @Get()
  findAll() {
    return this.seancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeanceDto: UpdateSeanceDto) {
    return this.seancesService.update(+id, updateSeanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seancesService.remove(+id);
  }
}
