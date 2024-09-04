import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>about page</h1>
      <Button asChild>
        <Link href='/'>Top</Link>
      </Button>
    </div>
  )
}
