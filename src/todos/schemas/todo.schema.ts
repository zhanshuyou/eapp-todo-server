import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  content: string;

  @Prop({
    default: ''
  })
  note: string;

  @Prop({
    default: null,
  })
  startDate: Date;

  @Prop({
    default: null,
  })
  dueDate: Date;

  @Prop({
    default: false,
  })
  isDeleted: boolean;

  @Prop({
    default: false,
  })
  isDone: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
