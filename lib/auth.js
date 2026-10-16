import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = () => new TextEncoder().encode(process.env.JWT_SECRET || "development-only-change-me");
export async function signToken(payload) {
  return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(key());
}
export async function getSession() {
  try {
    const token = (await cookies()).get("shimshim_session")?.value;
    if (!token) return null;
    return (await jwtVerify(token, key())).payload;
  } catch { return null; }
}
export async function requireRole(roles = ["user", "admin"]) {
  const user = await getSession();
  if (!user || !roles.includes(user.role)) return null;
  return user;
}
