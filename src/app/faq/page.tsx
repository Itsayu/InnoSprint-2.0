import { PageContainer } from '@/components/page-container';

export default function FAQPage() {
    return (
        <PageContainer title="Ancient Scrolls (FAQ)">
            <div>
                <h3 className="font-bold text-xl text-primary">Who can participate?</h3>
                <p className="mt-2">All are welcome: students, professionals, and lone wanderers of the coding world.</p>
                <h3 className="font-bold text-xl mt-4 text-primary">Is there a fee to enter this battle?</h3>
                <p className="mt-2">No, participation is free for all chosen warriors.</p>
            </div>
        </PageContainer>
    );
}
