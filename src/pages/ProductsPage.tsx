import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { LoanProducts } from '../components/LoanProducts';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Our Products" 
          subtitle="Comprehensive loan solutions tailored to meet your unique financial needs"
          backgroundImage="https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY5MTc3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        />
        <LoanProducts />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
