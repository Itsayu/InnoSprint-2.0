import type { ReactNode } from 'react';

type PageContainerProps = {
  title: string;
  children: ReactNode;
};

export function PageContainer({ title, children }: PageContainerProps) {
  return (
    <div className="min-h-screen mt-16 flex items-center justify-center px-4 pt-24 pb-12 fade-in">
      <div className="bg-card/70 dark:bg-card/70 p-6 sm:p-8 rounded-xl backdrop-blur-lg border border-border w-full max-w-4xl shadow-lg">
        <h1 
          className="text-4xl md:text-5xl font-headline font-black text-foreground uppercase tracking-wider mb-6 text-center"
          style={{ textShadow: '0 0 8px hsl(var(--primary))' }}
        >
          {title}
        </h1>
        <div className="text-muted-foreground font-sans text-base md:text-lg text-left space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
