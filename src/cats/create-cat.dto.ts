import { IsInt, Length, IsArray, IsOptional, Validate } from 'class-validator';
import { ObjectIdConstraint } from '../objectid.constraint';

export class CreateCatDto {
  @Length(1, 64)
  name: string;

  @IsInt()
  age: number;

  @Length(1, 64)
  breed: string;

  @IsArray()
  @Length(1, 64, {
    each: true,
  })
  @IsOptional()
  tags?: string[];

  /**
   * Need to learn to do custom class-validator decorator here
   * using the isValidObjectId function from mongoose
   */
  @Validate(ObjectIdConstraint)
  owner: string;
}
