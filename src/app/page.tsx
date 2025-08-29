'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Github, Award, Users, Briefcase, BarChart2, Heart, Calendar, CheckCircle, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';

const CONTACTS = [
  {
    icon: Phone,
    label: '07453 446391',
    href: 'tel:07453446391',
  },
  {
    icon: Mail,
    label: 'sam@samuelforrest.me',
    href: 'mailto:sam@samuelforrest.me',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/samueljforrest',
    href: 'https://linkedin.com/in/samueljforrest',
  },
  {
    icon: Github,
    label: 'samuelforrest.me',
    href: 'https://samuelforrest.me',
  },
];

const EDUCATION = [
  {
    type: 'A levels',
    place: "St George’s College, Weybridge",
    duration: '2021–Present',
    grades: [
      { subject: 'Mathematics', grade: 'B (predicted)' },
      { subject: 'Computer Science', grade: 'A* (predicted)' },
      { subject: 'Physics', grade: 'A (predicted)' },
    ],
  },
  {
    type: 'EPQ',
    place: "St George’s College, Weybridge",
    duration: '2023–Present',
    topic: "“To what extent is it feasible to reintroduce commercial supersonic aviation by the year 2040?”",
    grade: 'A* (predicted)',
  },
  {
    type: 'GCSEs',
    place: "St George’s College, Weybridge",
    duration: '2016–2021',
    grades: [
      { subject: 'English Literature', grade: '9' },
      { subject: 'Computing', grade: '9' },
      { subject: 'Mathematics', grade: '8' },
      { subject: 'Latin', grade: '7' },
      { subject: 'English Language', grade: '9' },
      { subject: 'Geography', grade: '9' },
      { subject: 'Physics', grade: '9' },
      { subject: 'Religious Studies', grade: '9' },
      { subject: 'Chemistry', grade: '9' },
      { subject: 'Biology', grade: '9' },
    ],
  },
];

const EXPERIENCES = [
  {
    title: 'Private Tutor',
    org: '',
    icon: Users,
    date: 'Oct 2024–Present',
    description: [
      'Delivering one-to-one tutoring to Computer Science students from diverse backgrounds, including those with special educational needs (SEND). Over 45 hours of lessons given to date.',
      'Developed strong communication, teaching, and time management, alongside empathy.',
    ],
  },
  {
    title: 'Freelance Developer',
    org: '',
    icon: Briefcase,
    date: 'May 2025–Present',
    description: [
      'Designed and coded responsive websites for 3 paying clients, using TailwindCSS, React, Next.js, Supabase, Google Analytics, and integrating features such as authentication, admin dashboards, blogs and AI features.',
      'Communicated directly with clients to gather requirements and to provide progress updates, strengthening client communication, active listening, and problem-solving skills.',
    ],
  },
  {
    title: 'British Airways Work Experience',
    org: 'British Airways',
    icon: Award,
    date: 'Jul–Aug 2025',
    description: [
      'Researched and presented a proposal for a new aircraft for the short-haul fleet to the fleet operations team, developing my analytical and presentation skills.',
      <Badge key='incomplete' variant='secondary'>Planned</Badge>,
    ],
  },
  {
    title: 'HUDJO App Development Work Experience',
    org: 'HUDJO',
    icon: Rocket,
    date: 'Aug–Nov 2024',
    description: [
      'Explored cross-platform mobile development by shadowing a startup developer at HUDJO, a bike-parking app, learning how cross-platform apps are built using JavaScript, TypeScript and the Expo framework.',
    ],
  },
  {
    title: 'Virgin Atlantic Aerospace Engineering Residential',
    org: 'Virgin Atlantic',
    icon: Rocket,
    date: 'Aug 2024',
    description: [
      'Gained exposure to aerospace engineering and led a 4-person team to design and present our glider to an audience of 100, winning the competition and demonstrating leadership and problem-solving skills.',
      <Badge key='winner' className='ml-2' variant='default'>Winner</Badge>,
    ],
  },
  {
    title: 'St Michael’s Fulwell Tech Team',
    org: 'St Michael’s Fulwell',
    icon: Users,
    date: '2017–2023',
    description: [
      'Volunteered 2 hours every Sunday, managing the audio and visuals at church, developing technical skills in sound mixing & equipment, alongside critical thinking skills and remaining calm under pressure, over 6 years.',
    ],
  },
];

const ACHIEVEMENTS = [
  {
    icon: Award,
    label: 'Honorary academic scholarship for outstanding performance',
  },
  {
    icon: BarChart2,
    label: '£300 online Hackathon winner, KTHack',
  },
  {
    icon: Heart,
    label: 'Grade 7 Saxophone, Grade 5 Piano, Music half-colours award, Jazz Band & Concert Band member',
  },
  {
    icon: Award,
    label: 'Silver & Bronze Duke of Edinburgh Award',
  },
];

const TECH_SKILLS = [
  'JavaScript', 'TypeScript', 'Git/Github', 'TailwindCSS', 'NativewindCSS', 'React', 'Next.js', 'APIs', 'CI/CD',
  'Supabase', 'Firebase', 'Databases', 'SQL', 'Google Cloud', 'SEO', 'Python', 'Microsoft Office', 'Notion', 'VScode', 'Claude/Gemini APIs'
];

const INTERPERSONAL_SKILLS = [
  'Communication', 'Time Management', 'Organisation', 'Presentation Skills', 'Analytical Thinking', 'Client Communication',
  'Active Listening', 'Teamwork', 'Leadership', 'Critical Thinking', 'Multitasking', 'Teaching', 'Analytical & Research Skills', 'Stress Management', 'Collaboration'
];

const OTHER_INTERESTS = [
  {
    title: 'Rowing & Fitness',
    details: 'Dedicated 8 hours a week to rowing from 2021–2025',
  },
  {
    title: 'Computer Hardware',
    details: 'Built PCs for myself, friends and family from scratch',
  },
  {
    title: 'Blogging',
    details: 'Runs a Computer Science, Aviation and AI blog at samuelforrest.me/blog',
  },
  {
    title: 'Podcasts',
    details: 'Enjoys Diary of a CEO, Lightcone Podcast (Y-Combinator), Mentour Pilot',
  },
  {
    title: 'Bike Rides',
    details: 'London to Brighton BHF (£500 raised), London to Paris (£500 raised), London to Bath, Vienna to Budapest via Bratislava (Danube River)',
  },
  {
    title: 'Flight Simulation',
    details: 'Active VATSIM pilot and trainee ATC, developing multitasking and stress management',
  },
  {
    title: 'Olympiads & Challenges',
    details: 'British Informatics Olympiad, Bebras, UK Maths Challenge participant',
  },
];

const PERSONAL_STATEMENT =
  `Motivated and ambitious student with a passion for technology, aviation, and problem-solving. Recognised for academic scholarship and technical achievements, I bring strong analytical, communication, and leadership skills developed through diverse work experiences, volunteering, and extracurricular interests. I thrive in dynamic, challenging environments and am committed to making a positive impact through innovation and collaboration.`;

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0] ?? '')
    .join('')
    .toUpperCase();
}

const LandingPage = () => {
  // Memoize initials for avatar fallback
  const initials = useMemo(() => getInitials('Samuel Forrest'), []);

  return (
    <TooltipProvider>
      <main className='font-sans min-h-screen bg-gray-50 text-gray-900'>
        {/* Header */}
        <section className='w-full bg-white shadow-sm border-b'>
          <div className='container mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6 md:gap-12'>
            <Avatar className='w-24 h-24'>
              <AvatarFallback className='text-3xl'>{initials}</AvatarFallback>
            </Avatar>
            <div className='flex-1'>
              <h1 className='text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2'>
                Samuel Forrest
                <Badge variant='default' className='ml-2 px-2 py-1 text-xs font-semibold'>Curriculum Vitae</Badge>
              </h1>
              <div className='flex flex-wrap gap-x-6 gap-y-2 mt-2 items-center'>
                {CONTACTS.map(({ icon: Icon, label, href }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a href={href} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1 text-gray-600 hover:text-blue-700 transition-colors text-sm'>
                        <Icon className='w-4 h-4 mr-1 text-blue-700' />
                        {label}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section>
          <div className='container mx-auto px-4 py-12 grid gap-12 md:grid-cols-3'>

            {/* Left Column: Statement, Skills, Interests */}
            <div className='flex flex-col gap-8 md:col-span-1'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Rocket className='inline-block w-5 h-5 mr-1 text-blue-700' />
                      Personal Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-700 text-sm leading-relaxed'>{PERSONAL_STATEMENT}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Tabs defaultValue='technical' className='w-full'>
                  <TabsList className='grid grid-cols-2 mb-2'>
                    <TabsTrigger value='technical'><BarChart2 className='inline w-4 h-4 mr-1' />Technical</TabsTrigger>
                    <TabsTrigger value='interpersonal'><Users className='inline w-4 h-4 mr-1' />Interpersonal</TabsTrigger>
                  </TabsList>
                  <TabsContent value='technical'>
                    <div className='flex flex-wrap gap-2'>
                      {TECH_SKILLS.map(skill => (
                        <Badge key={skill} variant='secondary'>{skill}</Badge>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value='interpersonal'>
                    <div className='flex flex-wrap gap-2'>
                      {INTERPERSONAL_SKILLS.map(skill => (
                        <Badge key={skill} variant='secondary'>{skill}</Badge>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Heart className='inline w-5 h-5 mr-1 text-pink-600' />
                      Other Interests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className='h-44'>
                      <ul className='list-disc pl-5 space-y-2 text-sm'>
                        {OTHER_INTERESTS.map(({ title, details }) => (
                          <li key={title}><b>{title}:</b> <span className='text-gray-700'>{details}</span></li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Middle Column: Education & Achievements */}
            <div className='flex flex-col gap-8 md:col-span-1'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Award className='inline w-5 h-5 mr-1 text-yellow-700' />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-col gap-6'>
                      {EDUCATION.map((ed, idx) => (
                        <div key={ed.type + ed.place} className='pb-2 border-b last:border-b-0'>
                          <div className='flex items-center justify-between'>
                            <span className='font-semibold'>{ed.type}</span>
                            <span className='text-xs text-gray-500'>{ed.duration}</span>
                          </div>
                          <div className='text-gray-700 text-sm'>{ed.place}</div>
                          {Array.isArray((ed as any).grades) && (
                            <div className='grid grid-cols-2 gap-x-6 gap-y-1 mt-1'>
                              {(ed as any).grades.map((g: { subject: string; grade: string }) => (
                                <div key={g.subject} className='flex justify-between'>
                                  <span>{g.subject}</span>
                                  <Badge variant='secondary'>{g.grade}</Badge>
                                </div>
                              ))}
                            </div>
                          )}
                          {'topic' in ed && (
                            <div className='mt-1 italic text-xs text-gray-600'>" {(ed as any).topic} "</div>
                          )}
                          {'grade' in ed && (
                            <div className='mt-1'>
                              <Badge variant='secondary'>{(ed as any).grade}</Badge>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <CheckCircle className='inline w-5 h-5 mr-1 text-green-700' />
                      Achievements & Awards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-3 mt-1 text-sm'>
                      {ACHIEVEMENTS.map(({ icon: Icon, label }) => (
                        <li key={label} className='flex items-start gap-2'>
                          <Icon className='w-4 h-4 mt-1 text-blue-600 flex-shrink-0' />
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column: Work Experience */}
            <div className='flex flex-col gap-8 md:col-span-1'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Briefcase className='inline w-5 h-5 mr-1 text-indigo-700' />
                      Work Experience & Volunteering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className='h-96'>
                      <div className='flex flex-col gap-6'>
                        {EXPERIENCES.map(({ title, org, icon: Icon, date, description }) => (
                          <div key={title + date} className='pb-2 border-b last:border-b-0'>
                            <div className='flex items-center gap-2'>
                              <Icon className='w-4 h-4 text-indigo-700' />
                              <span className='font-semibold'>{title}</span>
                              {org && (
                                <span className='text-xs text-gray-500 ml-2'>{org}</span>
                              )}
                            </div>
                            <div className='text-xs text-gray-400 mb-1'>{date}</div>
                            <ul className='list-disc pl-5 space-y-1 text-sm'>
                              {description.map((desc, i) =>
                                typeof desc === 'string' ? (
                                  <li key={i}>{desc}</li>
                                ) : (
                                  <li key={i}>{desc}</li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ / Extra Info / References */}
        <section>
          <div className='container mx-auto px-4 pb-12'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Accordion type='single' collapsible className='w-full max-w-2xl mx-auto'>
                <AccordionItem value='references'>
                  <AccordionTrigger>
                    <Info className='w-4 h-4 mr-2 text-blue-700' />
                    References
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className='text-gray-700 text-sm'>References available upon request.</span>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='full-cv'>
                  <AccordionTrigger>
                    <Award className='w-4 h-4 mr-2 text-yellow-600' />
                    Download Full CV
                  </AccordionTrigger>
                  <AccordionContent>
                    <Button asChild variant='outline' disabled>
                      <span>
                        <DownloadIcon className='w-4 h-4 mr-1' />
                        PDF Download coming soon
                      </span>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
    </TooltipProvider>
  );
};

// Helper Download Icon (uses Plus and Minus to create a downward arrow)
function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
      <ArrowRight x1='8' y1='4' x2='8' y2='12' stroke='currentColor' strokeWidth='2' />
      <Plus x1='8' y1='12' x2='8' y2='12' stroke='currentColor' strokeWidth='2' />
    </svg>
  );
}

export default LandingPage;