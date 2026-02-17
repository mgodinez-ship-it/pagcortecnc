import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Technology } from './components/Technology';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="size-full bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}