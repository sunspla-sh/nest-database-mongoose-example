import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  findAll() {
    return;
  }

  findOne(id: number) {
    return;
  }

  create(createCatDto) {
    return;
  }

  remove(id: number) {
    return;
  }
}
