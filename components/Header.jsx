"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, UserRound, X } from "lucide-react";
import { useStore } from "@/store/useStore";

const links = [
  ["/shop", "فروشگاه"],
  ["/categories", "دسته‌بندی‌ها"],
  ["/brands", "برندها"],
  ["/blog", "مجله"],
  ["/about", "درباره ما"],
];

function IconLink({ href, label, children, count = 0, className = "" }) {
  return (
    <Link href={href} aria-label={label} title={label} className={`relative grid size-10 shrink-0 place-items-center rounded-full text-[var(--ink)] transition-colors hover:bg-[var(--cream)] hover:text-[var(--gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] ${className}`}>
      {children}
      {count > 0 && <span className="absolute -right-0.5 -top-0.5 grid min-h-[17px] min-w-[17px] place-items-center rounded-full bg-[var(--gold)] px-1 text-[10px] leading-none text-white">{count > 99 ? "99+" : count}</span>}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="bg-[#211b17] px-3 py-2 text-center text-xs tracking-wide text-[#f8f4ec]">
        ارسال رایگان برای سفارش‌های بالای ۴ میلیون تومان
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/90 text-[var(--ink)] backdrop-blur-xl">
        <div className="mx-auto grid min-h-[76px] w-[calc(100%-40px)] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-6 max-[1050px]:gap-3 max-[800px]:flex max-[800px]:min-h-[68px] max-[800px]:w-[calc(100%-24px)] max-[800px]:justify-between max-[360px]:w-[calc(100%-12px)]">
          <button type="button" aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="hidden size-10 shrink-0 place-items-center rounded-full transition-colors hover:bg-[var(--cream)] focus-visible:outline-2 focus-visible:outline-[var(--gold)] max-[800px]:grid">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            href="/"
            aria-label="صفحه اصلی شیم‌شیم"
            className="group flex shrink-0 items-center gap-2.5 transition-all duration-300 hover:opacity-80 max-[800px]:mr-auto max-[360px]:gap-1.5"
          >
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 max-[800px]:h-9 max-[800px]:w-9">
              <img
                src="/images/logo.png"
                alt="SHIMSHIM"
                className="h-full w-full object-contain invert transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110"
              />
            </span>

            <span className="relative font-serif text-[25px] font-bold tracking-[0.16em] text-foreground transition-all duration-300 group-hover:tracking-[0.19em] max-[800px]:text-[21px] max-[360px]:text-[18px]">
              SHIMSHIM
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-current transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          <nav aria-label="منوی اصلی" className="flex items-center justify-center gap-7 whitespace-nowrap max-[1050px]:gap-4 max-[800px]:hidden">
            {links.map(([href, label]) => <Link key={href} href={href} className="py-3 text-[13px] opacity-80 transition-colors hover:text-[var(--gold)] hover:opacity-100">{label}</Link>)}
          </nav>

          <div className="flex items-center justify-self-end gap-1 max-[800px]:ml-auto max-[360px]:gap-0">
            <IconLink href="/search" label="جستجو" className="max-[800px]:hidden"><Search size={19} /></IconLink>

            <button type="button" aria-label="تغییر پوسته" onClick={() => setTheme((mounted ? resolvedTheme ?? theme : theme) === "dark" ? "light" : "dark")} className="grid size-10 shrink-0 place-items-center rounded-full transition-colors hover:bg-[var(--cream)] hover:text-[var(--gold)] focus-visible:outline-2 focus-visible:outline-[var(--gold)] max-[360px]:size-9">
              {mounted && resolvedTheme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <IconLink href="/profile" label="حساب کاربری" className="max-[800px]:hidden"><UserRound size={19} /></IconLink>
            <IconLink href="/wishlist" label="علاقه‌مندی‌ها" count={wishlist.length} className="max-[800px]:hidden"><Heart size={19} /></IconLink>
            <IconLink href="/cart" label="سبد خرید" count={cart.length} className="max-[360px]:size-9"><ShoppingBag size={20} /></IconLink>
          </div>
        </div>

        <div id="mobile-navigation" aria-hidden={!open} inert={!open} className={`grid overflow-hidden border-t border-[var(--line)] transition-[grid-template-rows,opacity] duration-300 ease-in-out min-[801px]:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"}`}>
          <div className="min-h-0 overflow-hidden">
            <nav aria-label="منوی موبایل" className="flex flex-col px-5 py-2">
              {links.map(([href, label]) => <Link key={href} href={href} onClick={closeMenu} className="border-b border-[var(--line)] py-3.5 text-sm transition-colors last:border-0 hover:text-[var(--gold)]">{label}</Link>)}
            </nav>

            <div className="flex flex-col gap-1 border-t border-[var(--line)] px-5 py-3">
              <Link href="/search" onClick={closeMenu} className="flex min-h-11 items-center gap-3 text-sm transition-colors hover:text-[var(--gold)]"><Search size={18} /> جستجو</Link>
              <Link href="/profile" onClick={closeMenu} className="flex min-h-11 items-center gap-3 text-sm transition-colors hover:text-[var(--gold)]"><UserRound size={18} /> حساب کاربری</Link>
              <Link href="/wishlist" onClick={closeMenu} className="flex min-h-11 items-center gap-3 text-sm transition-colors hover:text-[var(--gold)]"><Heart size={18} /> علاقه‌مندی‌ها <span className="mr-auto text-xs text-[var(--gold)]">{wishlist.length}</span></Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}