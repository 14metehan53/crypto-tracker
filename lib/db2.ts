import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error('MONGODB_URI environment değişkeni tanımlı değil!');
}

export async function mongoDB() {
  if (mongoose.connection.readyState >= 1) {
    return; // zaten bağlıysa tekrar bağlanma
  }

  try {
    await mongoose.connect(uri, {
      dbName: 'CryptoTracker', // 👈 burayı kendi veritabanı adınla değiştir
    });
    console.log('✅ MongoDB bağlantısı başarılı!');
  } catch (err) {
    console.error('❌ MongoDB bağlantı hatası:', err);
    throw err;
  }
}
