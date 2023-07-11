import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll() {
    return;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return;
  }

  @Post()
  create(@Body() createCatDto) {
    return;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return;
  }
}
