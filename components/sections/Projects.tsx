'use client';
import Card from '../ui/Card';

const projects = [
  {
    title: 'Autonomous AI Ads Engine',
    description: 'Reduced manual ad operations by 80%, improved ROAS by 35%',
    techStack: 'Next.js, Node.js, OpenAI APIs, Meta Ads API, Google Ads API, Redis, BullMQ',
  },
  {
    title: 'Unibox (Unified Inbox Platform)',
    description: 'Centralized 5+ communication channels, increased response rate by 50%',
    techStack: 'Next.js, PostgreSQL, SSE, Redis, WhatsApp API, LinkedIn integrations',
  },
  {
    title: 'AI Voice Sales Agent (Pine Labs Use Case)',
    description: 'Automated 1000+ calls/day, reduced cost per call by 60%',
    techStack: 'Retell AI, Twilio SIP, OpenAI, Node.js',
  },
  {
    title: 'TURGO.AI (Geo Analytics Platform)',
    description: 'Delivered 13 dashboards with real-time geo insights in 3 weeks',
    techStack: 'Next.js, Mapbox, Python, FastAPI, PostgreSQL',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title}>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm text-gray-500">Tech Stack: {project.techStack}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
