import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { TinyEditor } from "@/components/editors/tinyMCE";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="">
      <div className="">
        <TinyEditor/>
      </div>
    </main>
  )
}
