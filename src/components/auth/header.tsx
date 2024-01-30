import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(
        "text-3xl font-semibold",
        font.className,
      )}>
        {/* 🔐 Auth */}
        <Image src={"/img/logo-full-white.svg"}  width={200} height={100} className="px-2 hidden dark:block" alt="logo"/>
        <Image src={"/img/logo-full-black.svg"}  width={200} height={100} className="px-2 dark:hidden" alt="logo"/>
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  );
};
