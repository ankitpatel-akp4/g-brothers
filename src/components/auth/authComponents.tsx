'usee client'
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"
export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
   
        
       
     
      <Button {...props} onClick={ ()=>  signIn(provider)} className="text-nowrap">Sign In</Button>
    
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    
  return (
    
        
      <Button variant="ghost" className="w-full p-0 text-nowrap" {...props} onClick={ () => signOut()} >
        Sign Out
      </Button>
    
  )
}
