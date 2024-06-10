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
import { BookSeatDto } from './dto/book-seat.dto';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { SeatsService } from './seats.service';

@Controller('seats')
@ApiTags('seats')
@ApiBearerAuth('access_token')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatsService.create(createSeatDto);
  }

  @Get()
  findAll() {
    return this.seatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatsService.update(+id, updateSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatsService.remove(+id);
  }

  // admin only
  @Post(':id/reserve')
  reserve(@Param('id') id: string) {
    return this.seatsService.reserve(+id);
  }

  // client only
  @Post(':id/book')
  book(@Param('id') id: string, @Body() bookSeatDto: BookSeatDto) {
    return this.seatsService.book(+id, bookSeatDto);
  }

  @Post(':id/unbook')
  unbook(@Param('id') id: string) {
    return this.seatsService.unreserve(+id);
  }
}
