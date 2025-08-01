import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <h1 
        className="text-5xl md:text-7xl font-headline font-black text-foreground uppercase tracking-widest leading-tight" 
        style={{ textShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px #ff4500' }}
      >
        Unleash the Fury of Code
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
        Join us for a legendary hackathon where only the strongest coders will prevail. Build, battle, and conquer.
      </p>
      <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider transition-transform transform hover:scale-105 shadow-lg shadow-primary/50">
        <Link href="/contact">Register Now</Link>
      </Button>
    </div>
  );
}
