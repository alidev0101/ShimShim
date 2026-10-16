import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  Quote,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import ProductCard from "@/components/ProductCard";
import { categories, posts, products } from "@/lib/products";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SHIMSHIM",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    potentialAction: {
      "@type": "SearchAction",
      target: "/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero">
        <Image
          src="/images/editorial-hero.png"
          alt="کالکشن جدید شیم‌شیم"
          fill
          priority
          loading="eager"
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <MotionReveal>
            <span className="eyebrow" style={{ color: "#d8bc8c" }}>
              AUTUMN · WINTER 2026
            </span>
            <h1>
              وقارِ بی‌صدا
              <br />
              در هر انتخاب
            </h1>
            <p>
              کالکشن تازه SHIMSHIM؛ فرم‌های دقیق، بافت‌های ماندگار و زیبایی‌ای
              که از زمان عبور می‌کند.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn hero-btn" href="/shop">
                مشاهده کالکشن <ArrowLeft size={18} />
              </Link>
              <Link className="btn ghost-btn" href="/categories">
                کشف دسته‌بندی‌ها
              </Link>
            </div>
          </MotionReveal>
        </div>
        <div className="hero-index">
          01 <span /> 03
        </div>
      </section>

      <section className="benefits">
        <div className="container benefit-grid">
          {[
            [Truck, "ارسال سریع", "تهران ۲۴ ساعته"],
            [ShieldCheck, "ضمانت اصالت", "انتخابی مطمئن"],
            [Sparkles, "بسته‌بندی ویژه", "تجربه‌ای برای هدیه"],
          ].map(([Icon, t, s]) => (
            <div key={t}>
              <Icon size={22} />
              <span>
                <b>{t}</b>
                <small>{s}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MotionReveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">Curated for you</span>
                <h2 className="title">انتخاب بر اساس حس</h2>
              </div>
              <Link href="/categories">
                همه دسته‌بندی‌ها <ChevronLeft size={18} />
              </Link>
            </div>
          </MotionReveal>
          <div className="category-grid">
            {categories.map((c, i) => (
              <MotionReveal key={c.slug} delay={i * 0.08}>
                <Link className="category" href={`/shop?category=${c.slug}`}>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div />
                  <span>
                    <b>{c.name}</b>
                    <small>{c.count} محصول</small>
                  </span>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-strong)" }}
      >
        <div className="container">
          <MotionReveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">NEW ARRIVALS</span>
                <h2 className="title">تازه‌های منتخب</h2>
              </div>
              <Link href="/shop">
                مشاهده همه <ChevronLeft size={18} />
              </Link>
            </div>
          </MotionReveal>
          <div className="grid-products">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="story section">
        <div className="container story-grid">
          <MotionReveal className="story-image">
            <Image
              src="/images/editorial-dress.png"
              alt="داستان برند شیم‌شیم"
              fill
              sizes="50vw"
              style={{ objectFit: "cover" }}
            />
            <span className="story-stamp">
              EST.
              <br />
              2026
            </span>
          </MotionReveal>
          <MotionReveal className="story-copy">
            <span className="eyebrow">OUR PHILOSOPHY</span>
            <h2 className="title">
              لباس باید
              <br />
              شبیه خودِ شما باشد.
            </h2>
            <p className="muted">
              در SHIMSHIM هر قطعه برای ماندن انتخاب می‌شود؛ نه فقط در کمد، بلکه
              در خاطره. ما میان طراحی معاصر، کیفیت لمس‌کردنی و جزئیات بی‌ادعا
              تعادل می‌سازیم.
            </p>
            <Link className="btn btn-outline" href="/about">
              داستان شیم‌شیم <ArrowLeft size={18} />
            </Link>
          </MotionReveal>
        </div>
      </section>

      <section className="campaign">
        <Image
          src="/images/editorial-stilllife.png"
          alt="اکسسوری‌های منتخب"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="campaign-copy glass">
          <span className="eyebrow">PRIVATE EDIT</span>
          <h2>جزئیات، تمام ماجراست.</h2>
          <p>اکسسوری‌های ظریف برای کامل کردن استایل شما.</p>
          <Link className="btn" href="/shop?category=accessories">
            مشاهده اکسسوری‌ها
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MotionReveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">MOST LOVED</span>
                <h2 className="title">محبوب‌ترین‌ها</h2>
              </div>
            </div>
          </MotionReveal>
          <div className="grid-products">
            {products.slice(3, 6).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial section">
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: 800 }}
        >
          <Quote
            size={40}
            strokeWidth={1}
            style={{ margin: "0 auto 20px", color: "var(--gold)" }}
          />
          <p>
            «کیفیت پارچه و بسته‌بندی دقیقاً همان حسی را داشت که از یک برند لوکس
            انتظار داشتم؛ ساده، شخصی و به‌یادماندنی.»
          </p>
          <div>
            <b>ترانه نادری</b>
            <span className="muted"> · مشتری وفادار</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">SHIMSHIM JOURNAL</span>
              <h2 className="title">مجله استایل</h2>
            </div>
            <Link href="/blog">
              همه مقاله‌ها <ChevronLeft size={18} />
            </Link>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link className="post-image" href={`/blog/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
                <span className="eyebrow">{post.category}</span>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <small className="muted">{post.date}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <span className="eyebrow">PRIVATE LIST</span>
          <h2>به دنیای خصوصی SHIMSHIM وارد شوید.</h2>
          <p>دسترسی زودهنگام به کالکشن‌ها، رویدادها و پیشنهادهای اختصاصی.</p>
          <form>
            <input aria-label="ایمیل" type="email" placeholder="ایمیل شما" />
            <button>
              عضویت <ArrowLeft size={18} />
            </button>
          </form>
        </div>
      </section>
      <style>{`.hero{position:relative;min-height:calc(100svh - 105px);display:flex;align-items:center;color:#fff;overflow:hidden}.hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,10,8,.1),rgba(12,10,8,.75))}.hero-content{position:relative;z-index:2}.hero-content>div{max-width:590px}.hero h1{font-size:clamp(3rem,7vw,6.8rem);line-height:1.05;margin:14px 0 22px;letter-spacing:-.06em}.hero p{font-size:1.1rem;max-width:540px;color:#e4ddd2;margin-bottom:30px}.hero-btn{background:#f6f1e8;color:#16130f;border-color:#f6f1e8}.ghost-btn{background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.35);backdrop-filter:blur(10px)}.hero-index{position:absolute;z-index:2;left:4%;bottom:34px;display:flex;align-items:center;gap:8px;font-size:12px}.hero-index span{display:block;width:60px;height:1px;background:#fff}.benefits{border-bottom:1px solid var(--line)}.benefit-grid{display:grid;grid-template-columns:repeat(3,1fr);padding-block:22px}.benefit-grid>div{display:flex;align-items:center;justify-content:center;gap:12px;border-left:1px solid var(--line)}.benefit-grid>div:last-child{border:0}.benefit-grid span{display:flex;flex-direction:column}.benefit-grid small{color:var(--muted)}.section-head{display:flex;align-items:end;justify-content:space-between;gap:20px}.section-head>a{display:flex;align-items:center;gap:4px;margin-bottom:32px}.category-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:20px}.category{display:block;position:relative;aspect-ratio:3/4;border-radius:140px 140px 24px 24px;overflow:hidden}.category>div{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.62),transparent 50%)}.category>span{position:absolute;bottom:24px;right:24px;color:#fff;display:flex;flex-direction:column}.category b{font-size:1.5rem}.category img{transition:transform .7s}.category:hover img{transform:scale(1.04)}.story{overflow:hidden}.story-grid{display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:clamp(40px,8vw,110px)}.story-image{position:relative;min-height:660px;border-radius:260px 260px 30px 30px;overflow:hidden}.story-stamp{position:absolute;left:30px;bottom:30px;width:90px;height:90px;border-radius:50%;background:#151412;color:#d3b47b;display:grid;place-items:center;text-align:center;font-family:Georgia;letter-spacing:.1em}.story-copy{max-width:480px}.campaign{position:relative;min-height:680px;display:grid;place-items:center;padding:30px}.campaign:after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.18)}.campaign-copy{position:relative;z-index:2;text-align:center;padding:50px;max-width:560px;border-radius:30px;color:#171512;background:rgba(255,255,255,.68)}.campaign-copy h2{font-size:clamp(2.2rem,5vw,4rem);margin:8px 0}.testimonial{background:var(--cream)}.testimonial p{font-size:clamp(1.4rem,3vw,2rem);line-height:1.7}.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.post-image{display:block;position:relative;aspect-ratio:4/3;border-radius:24px;overflow:hidden;margin-bottom:18px}.blog-grid h3{font-size:1.25rem;margin:5px 0}.newsletter{text-align:center;padding:90px 0;background:linear-gradient(135deg,#d8c7ae,#eee5da);color:#1b1815}.newsletter h2{font-size:clamp(2rem,4vw,3.6rem);margin:8px 0}.newsletter form{width:min(560px,100%);margin:28px auto 0;display:flex;background:rgba(255,255,255,.62);border:1px solid rgba(255,255,255,.7);border-radius:999px;padding:7px}.newsletter input{flex:1;min-width:0;border:0;background:transparent;padding:0 18px;outline:none}.newsletter button{border:0;background:#171512;color:#fff;border-radius:999px;padding:12px 22px;display:flex;align-items:center;gap:8px}@media(max-width:760px){.hero{min-height:720px;align-items:end;padding-bottom:90px}.hero-overlay{background:linear-gradient(0deg,rgba(10,8,6,.82),rgba(10,8,6,.08))}.benefit-grid{grid-template-columns:1fr;gap:0}.benefit-grid>div{justify-content:flex-start;padding:12px 8px;border-left:0;border-bottom:1px solid var(--line)}.category-grid{grid-template-columns:1fr 1fr}.category-grid>div:first-child{grid-column:1/-1}.category{border-radius:80px 80px 20px 20px}.story-grid{grid-template-columns:1fr}.story-image{min-height:520px}.campaign{min-height:560px}.campaign-copy{padding:30px 20px}.blog-grid{grid-template-columns:1fr}.newsletter form{border-radius:22px}.newsletter button{padding-inline:16px}}`}</style>
    </>
  );
}
