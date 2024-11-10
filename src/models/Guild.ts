import { Schema, model, Document } from 'mongoose';

interface IGuild extends Document {
  guildId: string;
  isModeration: boolean;
  isModule: boolean;
}

const guildSchema = new Schema<IGuild>({
  guildId: { type: String, required: true, unique: true },
  isModeration: { type: Boolean, default: false },
  isModule: { type: Boolean, default: false }
});

export const Guild = model<IGuild>('Guild', guildSchema);
