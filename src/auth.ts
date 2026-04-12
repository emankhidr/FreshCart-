
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import{jwtDecode} from 'jwt-decode'



export const nextAuthConfig: NextAuthOptions =
{
    providers: [
        //credentails
        Credentials({
            name: 'credential login !',
            credentials: {
                email: {},
                password: {}
            },
           authorize: async (credentials) => {
  if (!credentials?.email || !credentials?.password) return null;

  const res = await fetch(`${process.env.API}auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
  });

  if (!res.ok) return null;

  const payload = await res.json();

  return {
    id: String(payload.user.id),
    name: payload.user.name,
    email: payload.user.email,
  } as any; // 👈 دي أهم نقطة لتفادي error
}
        })
    ],
    callbacks:{
        //sucessful login (authorize)/... 

        jwt({token,user}){

           if(user){
            token.id= user.id
             token.token = user.token
           }
          return  token

        },
        //client 
        session:({token,session})=>{
          if(token){
              session.user.name = token.name!
          }
            return session
             
        }
    },
    pages: {
        signIn: '/login'
    }
}
