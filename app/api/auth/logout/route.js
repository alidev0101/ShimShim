export async function POST(){const response=Response.json({ok:true});response.headers.set("Set-Cookie","shimshim_session=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax");return response}
