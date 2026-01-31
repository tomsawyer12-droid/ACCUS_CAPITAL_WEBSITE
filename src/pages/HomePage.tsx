import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { LoanProducts } from '../components/LoanProducts';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <LoanProducts />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}