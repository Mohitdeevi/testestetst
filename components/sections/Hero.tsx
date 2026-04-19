'use client';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">I build AI systems that replace entire workflows</h1>
      <p className="text-lg md:text-xl mb-8">AI Engineer crafting automation, SaaS, and growth engines that scale businesses</p>
      <div className="flex space-x-4">
        <Button>View Work</Button>
        <Button>Contact Me</Button>
      </div>
    </section>
  );
};

export default Hero;
