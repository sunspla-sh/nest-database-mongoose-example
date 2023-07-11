import { IsInt, Length, IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { isValidObjectId } from 'mongoose';

export class CreateCatDto {
  @Length(1, 64)
  name: string;
  @IsInt()
  age: number;
  @Length(1, 64)
  breed: string;

  @IsArray({
    each: true, //not sure if needed
  })
  @Type(() => String) //not sure if needed
  tags?: string[];

  /**
   * Need to learn to do custom class-validator decorator here
   * using the isValidObjectId function from mongoose
   */
  @IsString()
  owner: string;
}
