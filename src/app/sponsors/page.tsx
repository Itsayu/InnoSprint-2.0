import { PageContainer } from '@/components/page-container';
import { LogoCard, type LogoCardProps } from '@/components/logo-card';

const sponsors: LogoCardProps[] = [
  { name: 'Valhalla Ventures', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'venture capital' },
  { name: 'Asgardian APIs', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'api service' },
  { name: 'Midgard Cloud', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'cloud hosting' },
  { name: 'Bifrost Security', logoUrl: 'https://placehold.co/400x200.png', dataAiHint: 'cybersecurity firm' },
];

export default function SponsorsPage() {
    return (
        <PageContainer title="Our Allies">
            <p className="text-center mb-12 text-lg">Our quest is supported by powerful allies. We are grateful for their sponsorship, which makes this legendary event possible. All hail our generous benefactors!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {sponsors.map((sponsor) => (
                    <LogoCard key={sponsor.name} {...sponsor} />
                ))}
            </div>
        </PageContainer>
    );
}
