import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import Email from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "@/lib/db"


import type { NextAuthOptions, User } from "next-auth"

const config = 
{  
    providers: [
      Email({
        server: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: { 
          email: { label: "Username", type: "text", placeholder: "johndoe@domain.com" },
          password: { label: "Password", type: "password", placeholder: "verysecurepassword" },
        },
        async authorize(credentials) {
          // const authResponse = await fetch("/users/login", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(credentials),
          // })
  
          // if (!authResponse.ok) {
          //   return 
          // }
  
          // const user = await authResponse.json()
  
          // return user 
          return credentials as any
        },
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
    ],
    session: { strategy: "jwt" },
    adapter: PrismaAdapter(db),
    pages: {
      signIn: "/auth/login",
      error: "/auth/error",
    },
  } satisfies NextAuthOptions



const handler =  NextAuth({

    // events: {
    //   async linkAccount({ user }) {
    //     await db.user.update({
    //       where: { id: user.id },
    //       data: { emailVerified: new Date() }
    //     })
    //   }
    // },
    // callbacks: {
    //   async signIn({ user, account }) {
    //     // Allow OAuth without email verification
    //     if (account?.provider !== "credentials") return true;
  
    //     const existingUser = await getUserById(user.id);
  
    //     // Prevent sign in without email verification
    //     if (!existingUser?.emailVerified) return false;
  
    //     if (existingUser.isTwoFactorEnabled) {
    //       const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
  
    //       if (!twoFactorConfirmation) return false;
  
    //       // Delete two factor confirmation for next sign in
    //       await db.twoFactorConfirmation.delete({
    //         where: { id: twoFactorConfirmation.id }
    //       });
    //     }
  
    //     return true;
    //   },
    //   async session({ token, session }) {
    //     if (token.sub && session.user) {
    //       session.user.id = token.sub;
    //     }
  
    //     if (token.role && session.user) {
    //       session.user.role = token.role as UserRole;
    //     }
  
    //     if (session.user) {
    //       session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
    //     }
  
    //     if (session.user) {
    //       session.user.name = token.name;
    //       session.user.email = token.email;
    //       session.user.isOAuth = token.isOAuth as boolean;
    //     }
  
    //     return session;
    //   },
    //   async jwt({ token }) {
    //     if (!token.sub) return token;
  
    //     const existingUser = await getUserById(token.sub);
  
    //     if (!existingUser) return token;
  
    //     const existingAccount = await getAccountByUserId(
    //       existingUser.id
    //     );
  
    //     token.isOAuth = !!existingAccount;
    //     token.name = existingUser.name;
    //     token.email = existingUser.email;
    //     token.role = existingUser.role;
    //     token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
  
    //     return token;
    //   }
    // },

    ...config,
  });

export { handler as GET, handler as POST };
// export const { handler : GET,handler :POST, handler : auth, handler : signIn, handler :signOut } = NextAuth(config)
