'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Moon, Bell, Menu } from 'lucide-react';

export default function TopSection() {
  return (
    <nav className="mt-2 flex w-full max-w-7xl items-center justify-between bg-transparent px-2 print:hidden">
      <div className="flex flex-1 items-stretch justify-start">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="block rounded-md"
          />
          <span className="mr-2 ml-1 text-lg font-medium text-gray-900 dark:text-gray-100">
            Sidra Chain
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <button
          data-slot="dropdown-menu-trigger"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 w-9 px-0"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </button>
        <button
          data-slot="popover-trigger"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 relative"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
