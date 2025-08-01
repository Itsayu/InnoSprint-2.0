
import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export interface LogoCardProps {
  name: string;
  logoUrl: string;
  dataAiHint?: string;
}

export function LogoCard({ name, logoUrl, dataAiHint }: LogoCardProps) {
  return (
    <Card className="bg-card/50 hover:bg-card/80 transition-all duration-300 ease-in-out group border-border/50 hover:shadow-primary/20 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center justify-center aspect-video">
        <div className="relative w-full h-24">
            <Image
                src={logoUrl}
                alt={`${name} logo`}
                layout="fill"
                objectFit="contain"
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
                data-ai-hint={dataAiHint}
            />
        </div>
        <p className="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{name}</p>
      </CardContent>
    </Card>
  );
}
