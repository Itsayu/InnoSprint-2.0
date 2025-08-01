
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

export interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  dataAiHint?: string;
  description: string;
  socials?: { [key: string]: string };
  onCardClick?: () => void;
}

export function ProfileCard({ name, title, imageUrl, dataAiHint, onCardClick }: Omit<ProfileCardProps, 'description' | 'socials'> & {onCardClick?: () => void}) {
  return (
    <Card 
        className="text-center bg-card/50 hover:bg-card/80 transition-all duration-300 ease-in-out group border-border/50 hover:shadow-primary/20 hover:shadow-lg cursor-pointer hover:-translate-y-1"
        onClick={onCardClick}
    >
      <CardHeader className="items-center pb-0">
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          data-ai-hint={dataAiHint}
          className="rounded-full border-4 border-transparent group-hover:border-primary transition-colors"
        />
      </CardHeader>
      <CardContent className="pb-2">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
        <p className="text-muted-foreground">{title}</p>
      </CardContent>
    </Card>
  );
}
