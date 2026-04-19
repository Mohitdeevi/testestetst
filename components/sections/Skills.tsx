'use client';
import Badge from '../ui/Badge';

const skills = [
  'Next.js', 'React', 'Tailwind', 'Node.js', 'FastAPI', 'PostgreSQL',
  'OpenAI', 'LLM workflows', 'voice AI', 'Redis', 'BullMQ', 'Twilio', 'APIs'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills / Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
