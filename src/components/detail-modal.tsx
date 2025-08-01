
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from 'next/image';
import { ProfileCardProps } from "./profile-card";
import { Twitter, Linkedin, Github, Dribbble, Globe } from "lucide-react";

interface DetailModalProps {
  profile: ProfileCardProps;
  onClose: () => void;
}

const iconMap = {
    twitter: <Twitter className="w-6 h-6" />,
    linkedin: <Linkedin className="w-6 h-6" />,
    github: <Github className="w-6 h-6" />,
    dribbble: <Dribbble className="w-6 h-6" />,
    website: <Globe className="w-6 h-6" />,
}

export function DetailModal({ profile, onClose }: DetailModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card/80 backdrop-blur-lg border-border">
        <DialogHeader className="text-center items-center">
            <Image
                src={profile.imageUrl}
                alt={profile.name}
                width={128}
                height={128}
                data-ai-hint={profile.dataAiHint}
                className="rounded-full border-4 border-primary shadow-lg mb-4"
            />
          <DialogTitle className="text-3xl font-bold text-primary">{profile.name}</DialogTitle>
          <p className="text-lg text-muted-foreground">{profile.title}</p>
        </DialogHeader>
        <div className="py-4 text-center">
            <p className="text-base text-foreground">{profile.description}</p>
        </div>
        {profile.socials && (
            <div className="flex justify-center space-x-4 mt-2 text-foreground">
                {Object.entries(profile.socials).map(([key, value]) => (
                    <a key={key} href={value} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        {iconMap[key as keyof typeof iconMap]}
                    </a>
                ))}
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
