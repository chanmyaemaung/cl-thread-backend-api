import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/users.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ versionKey: false, timestamps: true })
export class Comment {
  @Prop()
  text: string;

  @Prop()
  likes: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' })
  parent: Comment | null;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
