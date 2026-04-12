
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

                const data = await fetch(` ${process.env.API}auth/signin`,
                    {
                        method: 'post',
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        }),
                        headers: {
                            'content-type': 'application/json'
                        }
                    }
                );
                if (!data.ok) {
                    throw new Error(data.statusText)
                }

                const payload = await data.json()
                const { name, email } = payload.user
                const tokenData = jwtDecode<{id:string}>(payload.token)
                console.log('payload', payload)
                // user when successful login 
                return {
                    id: tokenData.id,
                    name,
                    email,
                    token : payload.token //backend
                }
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
