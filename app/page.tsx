import Hero from '../components/sections/Hero';
import AboutMe from '../components/sections/AboutMe';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
