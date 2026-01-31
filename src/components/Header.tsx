import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import logo from 'figma:asset/a5ef97919a18c066e5bfd791ba39348318cf79e4.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll state
      setIsScrolled(currentScrollY > 20);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Loans', href: '/loans' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrollingDown 
          ? 'bg-white shadow-md py-5' 
          : isScrolled 
          ? 'bg-white shadow-md py-4' 
          : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="group">
              <img 
                src={logo} 
                alt="Accus Capital Logo" 
                className={`w-auto group-hover:scale-105 transition-all duration-300 ${ 
                  isScrollingDown ? 'h-18 md:h-20' : 'h-16 md:h-16'
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={link.href}
                  className={`text-gray-700 hover:text-[#00A99D] transition-colors duration-200 relative group ${
                    location.pathname === link.href ? 'text-[#00A99D]' : ''
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#00A99D] transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <Button className="bg-[#00A99D] hover:bg-[#008B82] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Apply Now
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#00A99D] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-gray-700 hover:text-[#00A99D] transition-colors py-2 border-b border-gray-200 ${
                    location.pathname === link.href ? 'text-[#00A99D] font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-[#00A99D] hover:bg-[#008B82] text-white px-6 py-2 rounded-full mt-4">
                Apply Now
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}