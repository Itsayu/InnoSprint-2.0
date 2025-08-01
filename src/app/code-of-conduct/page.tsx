import { PageContainer } from '@/components/page-container';

export default function CodeOfConductPage() {
    return (
        <PageContainer title="The Warrior's Code">
            <div className="space-y-6 text-lg">
                <p>To ensure a safe, respectful, and collaborative environment for all participants, we require everyone to adhere to the Warrior's Code. This code applies to all attendees, sponsors, partners, volunteers, and staff. Violation of this code will result in immediate expulsion from the realm and potential bans from future events.</p>

                <h3 className="font-bold text-2xl text-primary pt-4">Core Principles</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Be Respectful:</strong> Treat all individuals with respect, regardless of age, gender, race, ethnicity, nationality, sexual orientation, disability, physical appearance, or religion. We do not tolerate harassment in any form.</li>
                    <li><strong>Be Collaborative:</strong> The spirit of InnoSprint is to build, not to tear down. Encourage and support your fellow warriors. Celebrate each other's successes and offer help when needed.</li>
                    <li><strong>Be Professional:</strong> While this is a battle of code, it is also a professional event. Refrain from using inappropriate language, and be mindful of your conduct in all event spaces, including online channels.</li>
                    <li><strong>Respect Privacy:</strong> Do not photograph or record individuals without their express permission. Respect the confidentiality of projects and ideas shared during the event until they are publicly presented.</li>
                </ul>

                <h3 className="font-bold text-2xl text-primary pt-4">Reporting Violations</h3>
                <p>If you witness or are subject to any behavior that violates the Warrior's Code, please report it immediately to a member of the organizing council or event staff. All reports will be handled with discretion and investigated promptly.</p>
            </div>
        </PageContainer>
    );
}
