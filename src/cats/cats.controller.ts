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

  /**
   * We need a custom parseobjectid pipe here
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return;
  }

  @Post()
  create(@Body() createCatDto) {
    return;
  }

  /**
   * We need a custom parseobjectid pipe here
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return;
  }
}
