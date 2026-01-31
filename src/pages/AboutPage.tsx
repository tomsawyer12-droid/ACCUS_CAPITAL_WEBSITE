import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="About Us" 
          subtitle="Building financial futures for Ugandan families and businesses for over 15 years"
          backgroundImage="https://images.unsplash.com/photo-1693473280857-2d7465a27c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHVnYW5kYXxlbnwxfHx8fDE3NjkxNzc0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
        />
        <About />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}