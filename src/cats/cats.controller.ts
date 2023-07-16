import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ParseObjectIdPipe } from 'src/parse-objectid.pipe';
import { CatsService } from './cats.service';
import { CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<CatDocument[]> {
    return this.catsService.findAll();
  }

  /**
   * We need a custom parseobjectid pipe here
   */
  @Get(':id')
  findById(@Param('id', ParseObjectIdPipe) id: string): Promise<CatDocument> {
    return this.catsService.findById(id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<CatDocument> {
    return this.catsService.create(createCatDto);
  }

  /**
   * We need a custom parseobjectid pipe here
   */
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string): Promise<CatDocument> {
    return this.catsService.remove(id);
  }
}
