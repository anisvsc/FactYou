import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-2 bg-background/5 backdrop-blur-sm">
      <Link href={"/"} className="text-xl">
        <span className="text-blue-400 font-mono">Fact</span>You
      </Link>
      <Button asChild size={"icon"} variant={"outline"} className="cursor-pointer">
        <Link href={"/"} target="_blank">
          <Github />
        </Link>
      </Button>
    </div>
  );
}
