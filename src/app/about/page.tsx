import { PageContainer } from '@/components/page-container';

export default function AboutPage() {
    return (
        <PageContainer title="About InnoSprint 2.0">
            <div className="space-y-6 text-lg">
              <p>InnoSprint 2.0 is not just a hackathon; it's a 48-hour battleground for the brightest minds in technology to forge new creations, challenge their limits, and rise as champions of innovation. Inspired by the relentless spirit of ancient warriors, we challenge you to build solutions that are powerful, resilient, and legendary.</p>
              
              <h3 className="font-bold text-2xl text-primary pt-4">Our Mission</h3>
              <p>Our mission is to foster a community of builders, thinkers, and leaders. We aim to provide a platform where creativity flourishes, collaboration is key, and the most innovative ideas are brought to life. We believe in the power of technology to solve real-world problems and the potential of a focused, intense environment to unlock greatness.</p>
              
              <h3 className="font-bold text-2xl text-primary pt-4">What to Expect</h3>
              <p>Expect an electrifying atmosphere charged with energy and creativity. Participants will have access to mentorship from industry titans, workshops on cutting-edge technologies, and the opportunity to network with fellow innovators. Whether you are a seasoned developer or a budding enthusiast, InnoSprint 2.0 is the arena where you prove your mettle.</p>
            </div>
        </PageContainer>
    );
}
