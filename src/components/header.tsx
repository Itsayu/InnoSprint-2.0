"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from './theme-toggle';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/sponsors', label: 'Sponsors' },
];

const moreLinks = [
    { href: '/mentors', label: 'Mentors' },
    { href: '/team', label: 'Team' },
    { href: '/faq', label: 'FAQ' },
    { href: '/code-of-conduct', label: 'Code of Conduct' },
    { href: '/community-partners', label: 'Community Partners' },
];

export function Header() {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    cn(
      "hover:text-primary transition-colors",
      pathname === href && "text-primary"
    );
  
  const getMobileLinkClass = (href: string) =>
    cn(
      "text-lg font-medium hover:text-primary transition-colors",
      pathname === href && "text-primary"
    );

  return (
    <header className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-lg z-50 transition-colors duration-500 border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-primary tracking-wider">
          InnoSprint 2.0
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 font-bold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-bold hover:text-primary transition-colors flex items-center p-2 focus-visible:ring-0">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-popover text-popover-foreground">
              {moreLinks.map((link) => (
                 <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className={pathname === link.href ? 'text-primary' : ''}>{link.label}</Link>
                 </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact" className={getLinkClass('/contact')}>
            Contact
          </Link>
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background">
              <div className="flex flex-col space-y-4 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg">Menu</h2>
                    <ThemeToggle />
                </div>
                {[...navLinks, ...moreLinks, {href: '/contact', label: 'Contact'}].map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link href={link.href} className={getMobileLinkClass(link.href)}>
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}