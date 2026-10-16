import bcrypt from "bcryptjs";
import { z } from "zod";
import { connectDB } from "@/lib/db";
import { User } from "@/models";
import { signToken } from "@/lib/auth";
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export async function POST(request) {
  try {
    const data = schema.parse(await request.json());
    await connectDB();
    const user = await User.findOne({
      email: data.email.toLowerCase(),
      isActive: true,
    }).select("+passwordHash");
    if (!user || !(await bcrypt.compare(data.password, user.passwordHash)))
      return Response.json(
        { message: "ایمیل یا رمز عبور نادرست است" },
        { status: 401 }
      );
    const token = await signToken({
      sub: user.id,
      role: user.role,
      email: user.email,
    });
    const response = Response.json({
      ok: true,
      user: { id: user.id, name: user.name, role: user.role },
    });
    response.headers.append(
      "Set-Cookie",
      `shimshim_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800${
        process.env.NODE_ENV === "production" ? "; Secure" : ""
      }`
    );
    return response;
  } catch (error) {
    if (error instanceof z.ZodError)
      return Response.json({ message: "ورودی نامعتبر" }, { status: 400 });
    return Response.json({ message: "ورود انجام نشد" }, { status: 500 });
  }
}
