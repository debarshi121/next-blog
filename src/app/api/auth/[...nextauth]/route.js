import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
	],
});

export {authOptions as GET, authOptions as POST};
