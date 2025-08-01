import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-background/70 mt-auto z-10 transition-colors duration-500 border-t border-border/50">
      <div className="container mx-auto px-6 py-4 text-center text-muted-foreground">
        <p>&copy; 2025 InnoSprint 2.0. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
            <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
