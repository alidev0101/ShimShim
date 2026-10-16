"use client";
import Link from "next/link";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, UserRound, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

const links = [["/shop","فروشگاه"],["/categories","دسته‌بندی‌ها"],["/brands","برندها"],["/blog","مجله"],["/about","درباره ما"]];
export default function Header() {
  const [open, setOpen] = useState(false); const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme(); const cart = useStore(s=>s.cart); const wishlist = useStore(s=>s.wishlist);
  useEffect(()=>setMounted(true),[]);
  return <><div style={{background:"#171512",color:"#f9f5ee",textAlign:"center",fontSize:13,padding:"6px 12px"}}>ارسال رایگان برای سفارش‌های بالای ۴ میلیون تومان</div>
  <header className="glass" style={{position:"sticky",top:0,zIndex:50,borderInline:0}}><div className="container" style={{height:76,display:"flex",alignItems:"center",justifyContent:"space-between",gap:20}}>
    <button className="mobile-menu" aria-label="منو" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <Link href="/" aria-label="شیم‌شیم" style={{fontFamily:"Georgia,serif",fontWeight:700,fontSize:25,letterSpacing:".14em"}}>SHIMSHIM</Link>
    <nav className="desktop-nav">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <div style={{display:"flex",alignItems:"center",gap:7}}>
      <Link className="icon-btn hide-mobile" href="/search" aria-label="جستجو"><Search size={20}/></Link>
      <button className="icon-btn" aria-label="تغییر پوسته" onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{mounted&&theme==="dark"?<Sun size={19}/>:<Moon size={19}/>}</button>
      <Link className="icon-btn hide-mobile" href="/profile" aria-label="حساب"><UserRound size={20}/></Link>
      <Link className="icon-btn hide-mobile badge-wrap" href="/wishlist" aria-label="علاقه‌مندی"><Heart size={20}/>{wishlist.length>0&&<b>{wishlist.length}</b>}</Link>
      <Link className="icon-btn badge-wrap" href="/cart" aria-label="سبد خرید"><ShoppingBag size={20}/>{cart.length>0&&<b>{cart.length}</b>}</Link>
    </div>
  </div>{open&&<nav className="mobile-panel">{links.map(([h,l])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{l}</Link>)}<Link href="/search">جستجو</Link><Link href="/profile">حساب کاربری</Link></nav>}</header>
  <style jsx>{`.desktop-nav{display:flex;gap:26px;font-size:14px}.desktop-nav a{transition:color .2s}.desktop-nav a:hover{color:var(--gold)}.icon-btn{position:relative;width:40px;height:40px;border:0;border-radius:50%;display:grid;place-items:center;background:transparent;color:var(--ink);cursor:pointer}.icon-btn:hover{background:var(--cream)}.badge-wrap b{position:absolute;top:0;right:0;background:var(--gold);color:white;width:17px;height:17px;border-radius:50%;font-size:10px;display:grid;place-items:center}.mobile-menu{display:none;background:none;border:0;color:var(--ink)}.mobile-panel{display:none;padding:12px 22px 24px;gap:12px;flex-direction:column;border-top:1px solid var(--line)}@media(max-width:800px){.desktop-nav{display:none}.mobile-menu{display:block}.mobile-panel{display:flex}.hide-mobile{display:none}.container{height:68px!important}}`}</style>
  </>;
}
