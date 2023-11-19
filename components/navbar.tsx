"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu,Sparkles} from "lucide-react"; // It seems you're using an external library named "lucide-react" for icons.
import { Poppins } from "next/font/google";
import Link from "next/link"; // Importing the Link component from Next.js for client-side navigation.
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSlidebar } from "./mobile-slidebar";

const font =Poppins({
    weight: "600",
    subsets: ["latin"],
})

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSlidebar/>
        <Link href="/">
          <h1 className={cn(
            "hidden md:block text-xl md:text-3xl font-bold text-green-600 ",
            font.className
            )}>
            AI-Character
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant="premium" size="sm">
            upgrade
        <Sparkles className="h-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle/>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
}
