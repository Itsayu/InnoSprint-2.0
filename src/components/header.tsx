"use client";

import Link from 'next/link';
import Image from 'next/image';
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
import { useState } from 'react';
import { useTheme } from './theme-provider';

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
  const { theme } = useTheme();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const isMoreActive = moreLinks.some(link => pathname === link.href);

  const getLinkClass = (href: string, isActive: boolean = false) =>
    cn(
      "relative font-bold transition-colors hover:text-primary",
      "after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-primary",
      "after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100",
      (pathname === href || isActive) && "text-primary after:scale-x-100"
    );

  const getMobileLinkClass = (href: string) =>
    cn(
      "text-lg font-medium hover:text-primary transition-colors",
      pathname === href && "text-primary"
    );

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-xl z-50 transition-colors duration-500 border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-headline font-black text-primary tracking-wider" style={{ textShadow: '0 0 5px hsla(var(--primary), 0.5)' }}>
          <Image 
            src={theme === 'light' ? '/innosprint2.0.png' : '/innosprintwhite.png'} 
            alt="InnoSprint 2.0" 
            width={180} 
            height={40}
            priority={true}
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          
          {/* Change starts here: Wrap DropdownMenu in a div with hover handlers */}
          <div 
            className="relative"
            onMouseEnter={() => setIsMoreMenuOpen(true)}
            onMouseLeave={() => setIsMoreMenuOpen(false)}
          >
            <DropdownMenu open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className={cn(
                    getLinkClass('', isMoreActive),
                    'flex items-center p-2 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent'
                  )}
                >
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
          </div>
          {/* Change ends here */}

          <Link href="/contact" className={getLinkClass('/contact')}>
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* --- Mobile Menu (The global CSS fix will also solve the layout shift here) --- */}
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