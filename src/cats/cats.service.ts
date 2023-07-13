import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  findAll(): Promise<CatDocument[]> {
    return this.catModel.find().exec();
  }

  findOne(id: ObjectId): Promise<CatDocument> {
    return this.catModel.findById(id).exec();
  }

  create(createCatDto: CreateCatDto): Promise<CatDocument> {
    return this.catModel.create(createCatDto);
  }

  remove(id: ObjectId): Promise<CatDocument> {
    return this.catModel.findByIdAndRemove(id).exec();
  }
}
