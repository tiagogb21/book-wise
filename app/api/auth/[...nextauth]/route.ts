import { nextAuthOptions } from "@/app/lib/configs/auth/authOptions/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
