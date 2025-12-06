"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/aboutme" },
    // { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <nav className="bg-(--color-bg-primary)/80 dark:bg-black/50 backdrop-blur-md border border-(--color-border) dark:border-white/10 rounded-full px-6 py-3 shadow-lg flex items-center gap-4">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-text-primary",
                  pathname === item.path
                    ? "text-text-primary"
                    : "text-text-muted"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

