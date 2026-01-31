import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { BlogGrid } from '../components/BlogGrid';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Blog & Insights" 
          subtitle="Expert financial advice and news to help you make informed decisions"
          backgroundImage="https://images.unsplash.com/photo-1674653760708-f521366e5cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY5MTAyMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        />
        <BlogGrid />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
