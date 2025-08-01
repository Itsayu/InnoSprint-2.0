import { PageContainer } from '@/components/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Code, Users } from 'lucide-react';

const events = [
  {
    day: 'Day 1',
    date: 'October 25, 2025',
    schedule: [
      { time: '9:00 AM', title: 'Arrival of Warriors & Registration', icon: <Users /> },
      { time: '10:00 AM', title: 'Opening Ceremony: The Call to Arms', icon: <Calendar /> },
      { time: '11:00 AM', title: 'Hacking Begins: The Great Forge', icon: <Code /> },
      { time: '1:00 PM', title: 'Lunch: Feast of the Brave', icon: <Clock /> },
      { time: '3:00 PM', title: 'Workshop: AI - The Forbidden Magic', icon: <Users /> },
      { time: '7:00 PM', title: 'Dinner: The Warrior\'s Repast', icon: <Clock /> },
    ],
  },
  {
    day: 'Day 2',
    date: 'October 26, 2025',
    schedule: [
      { time: '9:00 AM', title: 'Day 2 Kick-off & Breakfast', icon: <Users /> },
      { time: '11:00 AM', title: 'Final Lines of Code: The Last Stand', icon: <Code /> },
      { time: '1:00 PM', title: 'Submission Deadline', icon: <Calendar /> },
      { time: '2:00 PM', title: 'Judging Commences: The Council Decides', icon: <Users /> },
      { time: '4:00 PM', title: 'Closing Ceremony & Awarding of Champions', icon: <Calendar /> },
    ],
  },
];


export default function EventsPage() {
    return (
        <PageContainer title="Events & Schedule">
             <p className="text-center mb-12 text-lg">The saga unfolds with intense coding challenges, mentorship from industry titans, and workshops on forbidden technologies. Here is the chronicle of our grand tournament.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((event) => (
                    <Card key={event.day} className="bg-card/50 backdrop-blur-lg border-border/50 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary font-bold">{event.day}</CardTitle>
                            <p className="text-muted-foreground">{event.date}</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {event.schedule.map((item) => (
                                     <li key={item.title} className="flex items-start space-x-4">
                                         <div className="text-primary mt-1">{item.icon}</div>
                                         <div>
                                             <p className="font-semibold text-foreground">{item.title}</p>
                                             <p className="text-sm text-muted-foreground">{item.time}</p>
                                         </div>
                                     </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </PageContainer>
    );
}
