import { PageContainer } from '@/components/page-container';
import { LogoCard, type LogoCardProps } from '@/components/logo-card';

const partners: LogoCardProps[] = [
  { name: 'Tech Guild', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'tech community' },
  { name: 'Innovators Hub', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'innovation hub' },
  { name: 'Dev Circle', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'developer group' },
  { name: 'Code Crafters', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'coding community' },
];

export default function CommunityPartnersPage() {
    return (
        <PageContainer title="Kingdoms in Alliance">
            <p className="text-center mb-12 text-lg">We are proud to partner with other great kingdoms and communities. Their support helps strengthen our cause and reach more warriors across the land.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {partners.map((partner) => (
                    <LogoCard key={partner.name} {...partner} />
                ))}
            </div>
        </PageContainer>
    );
}
