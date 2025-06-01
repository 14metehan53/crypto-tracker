import mongoose, { Document, Model } from 'mongoose';

interface Ohlc {
  coinId: string;
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface OhlcDocument extends Ohlc, Document {
  _id: string;
}

const ohlcSchema = new mongoose.Schema({
  coinId: { type: String, required: true },
  timestamp: { type: Number, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true },
  close: { type: Number, required: true },
});

ohlcSchema.index({ coinId: 1, timestamp: 1 }, { unique: true });

export const OHLCModel: Model<OhlcDocument> =
  mongoose.models.OHLC || mongoose.model<OhlcDocument>('OHLC', ohlcSchema);
