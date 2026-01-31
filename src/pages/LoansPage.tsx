import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { LoanProducts } from '../components/LoanProducts';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export function LoansPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Loan Solutions" 
          subtitle="Fast, reliable, and affordable loans to help you achieve your financial goals"
          backgroundImage="https://images.unsplash.com/photo-1623244736886-1108836855e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFmcmljYW4lMjBmYW1pbHklMjBob21lfGVufDF8fHx8MTc2OTE3NzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080"
        />
        <LoanProducts />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
