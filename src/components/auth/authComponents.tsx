'usee client'
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"
export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
   
        
       
     
      <Button {...props} onClick={ ()=>  signIn(provider)}>Sign In</Button>
    
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    
  return (
    
        
      <Button variant="ghost" className="w-full p-0" {...props} onClick={ () => signOut()}>
        Sign Out
      </Button>
    
  )
}
