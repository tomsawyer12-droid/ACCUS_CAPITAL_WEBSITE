import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { LoansPage } from './pages/LoansPage';
import { BlogPage } from './pages/BlogPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Preloader } from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already visited (preloader shown once per session)
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem('hasVisited', 'true');
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}