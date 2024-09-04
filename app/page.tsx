import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Top page</h1>
      <Button className="mt-4" asChild>
        <Link href='/about'>about page</Link>
      </Button>
      <Image src='/background.svg' alt="" fill className="object-cover -z-10 blur" />
    </div>

  );
}
