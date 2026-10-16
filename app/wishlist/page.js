"use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useStore } from "@/store/useStore";
export default function Wishlist(){const items=useStore(s=>s.wishlist);return <div className="container section"><span className="eyebrow">MY EDIT</span><h1 className="title">علاقه‌مندی‌های من</h1>{items.length?<div className="grid-products">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div style={{textAlign:"center",padding:"80px 10px",border:"1px dashed var(--line)",borderRadius:24}}><Heart size={42} style={{margin:"auto",color:"var(--gold)"}}/><h2>هنوز چیزی ذخیره نکرده‌اید</h2><Link className="btn" href="/shop">دیدن محصولات</Link></div>}</div>}
