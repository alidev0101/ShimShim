import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) { return twMerge(clsx(inputs)); }
export function toman(value) {
  return `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;
}
export function apiError(error, fallback = "خطایی رخ داد") {
  console.error(error);
  return Response.json({ ok: false, message: fallback }, { status: 500 });
}
