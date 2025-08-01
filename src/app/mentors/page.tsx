'use client';

import { PageContainer } from '@/components/page-container';
import { ProfileCard, type ProfileCardProps } from '@/components/profile-card';
import { DetailModal } from '@/components/detail-modal';
import { useState } from 'react';

const chiefGuest: ProfileCardProps = {
  name: 'Erik the Wise',
  title: 'Chief Guest & High King of Tech',
  imageUrl: 'https://placehold.co/400x400.png',
  dataAiHint: 'wise king',
  description: 'Erik the Wise, a legendary figure who has built empires of code and conquered the most complex technological challenges. His wisdom is sought by all, and his presence inspires greatness. He will grace our event with an opening keynote on the future of innovation.',
  socials: {
    twitter: '#',
    linkedin: '#',
  },
};

const mentors: ProfileCardProps[] = [
  { name: 'yo', title: 'AI & Machine Learning at Oracle', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female strategist', description: 'yo is a master of artificial intelligence, weaving complex algorithms as a sorceress weaves spells. She guides teams on crafting intelligent systems that can learn and adapt.', socials: { twitter: '#', linkedin: '#', github: '#' } },
  { name: 'yo yo', title: 'Full-Stack Development at D4', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'viking warrior', description: 'With the strength of a true berserker, yo yo can build entire applications from the ground up. He mentors on robust architecture and scalable design.', socials: { twitter: '#', linkedin: '#', github: '#' } },
  { name: 'yo yo yo', title: 'UI/UX Design at D4', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female warrior', description: 'yo yo yo champions the user. Her expertise lies in creating intuitive and beautiful interfaces that provide a seamless user experience, guiding warriors to design with both form and function.', socials: { twitter: '#', linkedin: '#', dribbble: '#' } },
  { name: 'yo yo yo yo', title: 'Cybersecurity Expert', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'cunning warrior', description: 'Known for his cunning and strategic mind, yo yo yo yo is a master of digital defense. He teaches how to fortify applications against the darkest of digital threats.', socials: { twitter: '#', linkedin: '#', } },
];


export default function MentorsPage() {
    const [selectedProfile, setSelectedProfile] = useState<ProfileCardProps | null>(null);

    return (
        <PageContainer title="The Oracles (Mentors)">
            <p className="text-center mb-8 text-lg">Guiding our warriors are the Oracles, mentors from across the tech realms. They offer wisdom, strategy, and insight. Seek their counsel to achieve victory.</p>
            
            <h2 className="text-3xl font-bold text-center text-primary mt-12 mb-8">Chief Guest</h2>
            <div className="flex justify-center mb-12">
                <ProfileCard {...chiefGuest} onCardClick={() => setSelectedProfile(chiefGuest)} />
            </div>
            
            <h2 className="text-3xl font-bold text-center text-primary mt-16 mb-8">Mentors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {mentors.map((mentor) => (
                    <ProfileCard key={mentor.name} {...mentor} onCardClick={() => setSelectedProfile(mentor)} />
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
