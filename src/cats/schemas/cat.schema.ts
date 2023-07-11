import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Owner } from '../../owners/schemas/owner.schema';

@Schema()
export class Cat {
  @Prop({
    required: true,
    minlength: 1,
    maxlength: 64,
  })
  name: string;

  @Prop({
    required: true,
    min: 1,
    max: 30,
  })
  age: number;

  @Prop({
    required: true,
    minlength: 1,
    maxlength: 64,
  })
  breed: string;

  /**
   * Schema types are automatically inferred through typescript metadata and reflection capabilities.
   * However, when types cannot be implicitly reflected such as in arrays or nested object structures,
   * types must be explicitly indicated as follows:
   */
  @Prop([String])
  tags: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
  owner: Owner;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

export type CatDocument = HydratedDocument<Cat>;
