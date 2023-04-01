import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NewsDocument = News & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class News {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  userId: number;
}

export const NewsSchema = SchemaFactory.createForClass(News);
