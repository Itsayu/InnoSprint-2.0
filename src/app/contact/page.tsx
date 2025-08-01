
"use client";

import { PageContainer } from '@/components/page-container';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

export default function ContactPage() {
    const { toast } = useToast();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to a server.
        // For this demo, we'll just show a success toast.
        toast({
            title: "Message Sent!",
            description: "Your raven has been dispatched. We will reply soon.",
        });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <PageContainer title="Send a Raven">
            <p className="text-center mb-8">For inquiries, alliances, or challenges, send a raven to our council. Fill out the scroll below and our fastest bird will carry your message. May your message find us swiftly.</p>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-semibold text-primary">Your Name</Label>
                    <Input id="name" type="text" placeholder="Legendary Warrior" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold text-primary">Your Email</Label>
                    <Input id="email" type="email" placeholder="warrior@realm.co" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg font-semibold text-primary">Your Message</Label>
                    <Textarea id="message" placeholder="Your challenge, proposal, or query..." value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <div className="text-center">
                    <Button type="submit" size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider transition-transform transform hover:scale-105 shadow-lg shadow-primary/50">
                        Dispatch Raven
                    </Button>
                </div>
            </form>
        </PageContainer>
    );
}
