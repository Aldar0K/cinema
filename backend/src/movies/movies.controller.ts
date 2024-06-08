import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
@ApiTags('movies')
@ApiBearerAuth('access_token')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiCreatedResponse({ type: MovieEntity })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOkResponse({ type: MovieEntity, isArray: true })
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MovieEntity })
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MovieEntity })
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MovieEntity })
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}
