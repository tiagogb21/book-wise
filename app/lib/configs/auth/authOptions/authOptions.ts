import { Session, TokenSet } from "next-auth";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export const nextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                    scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
                },
            },
            profile(profile: GithubProfile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    username: "",
                    email: profile.email,
                    avatar_url: profile.picture,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
            profile(profile: GoogleProfile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    username: "",
                    email: profile.email,
                    avatar_url: profile.picture,
                };
            },
        }),
    ],
    callbacks: {
        async session({ session, token }: { session: Session; token: TokenSet }) {
            return {
              ...session,
              ...token,
            }
        },
    },
};