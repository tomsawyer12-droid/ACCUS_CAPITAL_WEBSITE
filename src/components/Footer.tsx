import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react';
import logo from 'figma:asset/a5ef97919a18c066e5bfd791ba39348318cf79e4.png';

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Loans', href: '/loans' },
    // No dedicated FAQs route exists yet; temporarily link to Blog
    { name: 'FAQs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const loanProducts = [
    // These map to product detail routes defined in App (homePageProducts)
    { name: 'Personal Loans', href: '/products/personal-loans-home' },
    { name: 'Salary Loans', href: '/products/salary-loans-home' },
    { name: 'SME Loans', href: '/products/business-loans-home' },
    // The following currently have no dedicated detail pages; link to listing
    { name: 'Asset Financing', href: '/products' },
    { name: 'Mortgage Loans', href: '/products' },
    { name: 'Investment Loans', href: '/products' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-[#54585A] text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 bg-white p-4 rounded-lg inline-block">
              <img 
                src={logo} 
                alt="Accus Capital Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for fast, reliable, and affordable financial solutions across Uganda.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-700 hover:bg-[#00A99D] rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-[#00A99D] transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#00A99D] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Loan Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Loan Products</h3>
            <ul className="space-y-3">
              {loanProducts.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.href}
                    className="hover:text-[#00A99D] transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#00A99D] mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#00A99D] flex-shrink-0 mt-1" size={20} />
                <span>Plot 123, Kampala Road<br />Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#00A99D] flex-shrink-0" size={20} />
                <span>+256 700 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#00A99D] flex-shrink-0" size={20} />
                <span>info@accuscapital.ug</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-[#00A99D] flex-shrink-0 mt-1" size={20} />
                <div>
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 1:00 PM</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm text-center md:text-left"
            >
              © 2025 Accus Capital Financial Solutions. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="hover:text-[#00A99D] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00A99D] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00A99D] transition-colors">Cookie Policy</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-center text-xs text-gray-300"
          >
            Licensed and regulated by Bank of Uganda | Member of Uganda Microfinance Regulatory Authority
          </motion.div>
        </div>
      </div>
    </footer>
  );
}