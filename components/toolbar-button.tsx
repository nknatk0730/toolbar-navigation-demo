'use client';

import { Home, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export const ToolbarButton = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) => {
  const pathname = usePathname();
  const IconSlot = Slot as LucideIcon;

  return (
    <Button
      asChild
      className={cn("hover:bg-accent/20 rounded-full", href === pathname && "ring ring-primary")}
      size="icon"
      variant="ghost"
    >
      <Link href={href}>
        <IconSlot size={20}>{icon}</IconSlot>
        <span className="sr-only">{title}</span>
      </Link>
    </Button>
  );
}