import mongoose from "mongoose";

const state = global.__mongoose || (global.__mongoose = { conn: null, promise: null });

export async function connectDB() {
  if (state.conn) return state.conn;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not configured");
  if (!state.promise) state.promise = mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  state.conn = await state.promise;
  return state.conn;
}