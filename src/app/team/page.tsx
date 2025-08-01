
'use client';

import { PageContainer } from '@/components/page-container';
import { ProfileCard, type ProfileCardProps } from '@/components/profile-card';
import { DetailModal } from '@/components/detail-modal';
import { useState } from 'react';

const teamMembers: ProfileCardProps[] = [
  { name: 'Ragnar Lodbrok', title: 'Lead Organizer', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'viking leader', description: 'The visionary behind InnoSprint, Ragnar orchestrates the grand battle, ensuring a legendary experience for all warriors.', socials: { twitter: '#', linkedin: '#', } },
  { name: 'Harald Fairhair', title: 'Logistics Head', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'viking chief', description: 'Harald manages the flow of resources and the battlefield itself. His meticulous planning ensures the event runs as smoothly as a longship on a calm sea.', socials: { twitter: '#', linkedin: '#', } },
  { name: 'Sigurd Snake-in-the-Eye', title: 'Marketing & Outreach', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'mysterious warrior', description: 'With a keen eye for spreading the word, Sigurd summons warriors from all corners of the digital world to join the fray.', socials: { twitter: '#', linkedin: '#', } },
  { name: 'Ubbe Ragnarsson', title: 'Sponsorship Coordinator', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'calm warrior', description: 'Ubbe forges alliances with powerful patrons, securing the treasures needed to fund our epic quest.', socials: { twitter: '#', linkedin: '#', } },
];


export default function TeamPage() {
    const [selectedProfile, setSelectedProfile] = useState<ProfileCardProps | null>(null);

    return (
        <PageContainer title="The Council (Team)">
            <p className="text-center mb-12 text-lg">Meet the council responsible for forging this grand event. We are a dedicated team of developers, designers, and dreamers who believe in the power of creation and the spirit of competition.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <ProfileCard key={member.name} {...member} onCardClick={() => setSelectedProfile(member)} />
                ))}
            </div>

            {selectedProfile && (
                <DetailModal
                    profile={selectedProfile}
                    onClose={() => setSelectedProfile(null)}
                />
            )}
        </PageContainer>
    );
}
