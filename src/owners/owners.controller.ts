import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ParseObjectIdPipe } from '../parse-objectid.pipe';
import { OwnersService } from './owners.service';
import { OwnerDocument } from './schemas/owner.schema';
import { CreateOwnerDto } from './create-owner.dto';

@Controller('owners')
export class OwnersController {
  constructor(private ownersService: OwnersService) {}

  @Get()
  findAll(): Promise<OwnerDocument[]> {
    return this.ownersService.findAll();
  }

  /**
   * Need custom ParseObjectId pipe here
   */
  @Get(':id')
  findById(@Param('id', ParseObjectIdPipe) id: string) {
    return this.ownersService.findById(id);
  }

  @Post()
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownersService.create(createOwnerDto);
  }

  /**
   * Need custom ParseObjectId pipe here
   */
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.ownersService.remove(id);
  }
}
