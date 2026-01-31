import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  cta: string;
  type: 'content' | 'stats';
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Fast & Reliable',
    subtitle: 'Loan Solutions',
    description: 'Empowering Ugandan families and businesses with accessible financial solutions. Get approved in minutes, receive funds within 24 hours.',
    image: 'https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY5MTc3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Quick Approval', 'Low Interest Rates', 'Flexible Repayment'],
    cta: 'Apply for a Loan',
    type: 'content',
  },
  {
    id: 2,
    title: 'Business Loans',
    subtitle: 'Grow Your Enterprise',
    description: 'Scale your business with our tailored financing solutions. From small businesses to large enterprises, we have the right loan for you.',
    image: 'https://images.unsplash.com/photo-1687422808311-a776f467a468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc21hbGwlMjBidXNpbmVzcyUyMHNob3B8ZW58MXx8fHwxNzY5MjQyODMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Up to UGX 50M', 'Flexible Terms', 'Business Support'],
    cta: 'Get Business Loan',
    type: 'content',
  },
  {
    id: 3,
    title: 'Personal Loans',
    subtitle: 'For Every Life Goal',
    description: 'Whether it\'s education, medical expenses, or home improvements, we provide personal loans that fit your needs and budget.',
    image: 'https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwdG9nZXRoZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc2OTI0MjgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['No Collateral', 'Same Day Approval', 'Competitive Rates'],
    cta: 'Apply Now',
    type: 'content',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#00A99D]">
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7 }}
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
            {/* Darker overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A99D]/85 via-[#008B82]/80 to-[#00736B]/85"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A99D] rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#33BAAF] rounded-full blur-3xl"
            />
          </div>

          {/* Content - Show based on slide type */}
          {currentSlideData.type === 'content' ? (
            <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-[1400px] relative z-10 h-full flex items-center">
              <div className="max-w-4xl pt-28 md:pt-40 pb-12 pl-4 md:pl-20 lg:pl-28">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-6 md:mb-12"
                >
                  <span className="inline-block px-6 py-3 bg-white/20 border border-white/30 rounded-full text-white text-sm">
                    Trusted by 50,000+ Ugandans
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                >
                  {currentSlideData.title}
                  <span className="block text-white">{currentSlideData.subtitle}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-100 mb-5 max-w-2xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-wrap gap-4 mb-6"
                >
                  {currentSlideData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-2 text-white"
                    >
                      <CheckCircle className="text-white" size={20} />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-[#00A99D] px-8 py-6 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 group text-lg font-semibold"
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 bg-transparent px-8 py-6 rounded-full transition-all duration-300 text-lg"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </div>
          ) : (
            /* Stats Slide */
            <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-[1400px] relative z-10 h-full flex items-center justify-center">
              <div className="w-full max-w-5xl text-center pt-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">Our Impact</h2>
                  <p className="text-xl md:text-2xl text-gray-100 mb-16">Transforming lives across Uganda</p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                  {[
                    { value: '50K+', label: 'Happy Clients', description: 'Satisfied customers nationwide' },
                    { value: 'UGX 10B+', label: 'Loans Disbursed', description: 'In total funding provided' },
                    { value: '24hrs', label: 'Quick Processing', description: 'Average approval time' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.value}</div>
                      <div className="text-xl text-white mb-2 font-semibold">{stat.label}</div>
                      <div className="text-sm text-gray-200">{stat.description}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-[#00A99D] px-12 py-6 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 group text-lg font-semibold"
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}