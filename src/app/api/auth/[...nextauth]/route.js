import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/utils/connect";

const authOptions = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
	],
});

export {authOptions as GET, authOptions as POST};
