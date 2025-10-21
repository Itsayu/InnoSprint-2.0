import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-background/70 mt-auto z-10 transition-colors duration-500 border-t border-border/50">
      <div className="container mx-auto px-6 py-4 text-center text-muted-foreground">
        <p>Organized by D4 Community</p>
        <p>&copy; 2025 Hack-N-Win 3.0. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
            <Link href="https://x.com/d4community" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link href="https://linkedin.com/company/d4community" className="hover:text-foreground transition-colors">LinkedIn</Link>
            <Link href="https://instagram.com/d4community" className="hover:text-foreground transition-colors">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
