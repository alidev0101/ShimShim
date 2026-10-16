# SHIMSHIM

فروشگاه آنلاین Full-Stack لباس زنانه با Next.js App Router، MongoDB و طراحی راست‌به‌چپ.

## اجرا

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

پیش از اجرا، `MONGODB_URI` و یک `JWT_SECRET` طولانی را در `.env.local` تنظیم کنید. برای انتشار روی Vercel نیز همین متغیرها و `NEXT_PUBLIC_SITE_URL` را در Project Settings وارد کنید.

## امکانات

- صفحه اصلی، فروشگاه، جستجو، دسته‌بندی، برند، جزئیات محصول، سبد، علاقه‌مندی، پرداخت آزمایشی، حساب کاربری، سفارش‌ها، وبلاگ و پنل مدیریت
- Route Handlerهای REST برای احراز هویت، محصول، سبد، علاقه‌مندی، سفارش، نظر، کوپن و وبلاگ
- مدل‌های Mongoose برای تمام موجودیت‌های اصلی
- JWT در Cookie امن، RBAC، اعتبارسنجی Zod و هدرهای امنیتی
- Metadata پویا، Sitemap، Robots، Canonical و Schemaهای Product/Article/WebSite
- Light/Dark mode، Zustand، TanStack Query، Framer Motion و رابط Responsive

## فونت Morabba

استایل‌ها از `Morabba` به‌عنوان فونت اول استفاده می‌کنند. به‌دلیل مجوز تجاری فونت، فایل آن داخل مخزن قرار نگرفته است. نسخه دارای مجوز را با نام `Morabba.woff2` در `public/fonts` قرار دهید و در `app/globals.css` یک `@font-face` برای آن تعریف کنید.

## پرداخت

Checkout در حالت demo کامل می‌شود. برای محیط واقعی، Route Handler ایجاد سفارش را به درگاه انتخابی متصل و Callback درگاه را به‌صورت idempotent پیاده‌سازی کنید.
