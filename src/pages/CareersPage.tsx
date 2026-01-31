import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function CareersPage() {
  const openPositions = [
    {
      title: 'Loan Officer',
      department: 'Credit Department',
      location: 'Kampala',
      type: 'Full-time',
      description: 'Assess loan applications, conduct client interviews, and manage loan portfolios.',
    },
    {
      title: 'Customer Service Representative',
      department: 'Customer Support',
      location: 'Multiple Locations',
      type: 'Full-time',
      description: 'Provide excellent customer service and support to clients across all our branches.',
    },
    {
      title: 'Branch Manager',
      department: 'Operations',
      location: 'Entebbe',
      type: 'Full-time',
      description: 'Oversee daily branch operations, manage staff, and ensure customer satisfaction.',
    },
    {
      title: 'Credit Analyst',
      department: 'Risk Management',
      location: 'Kampala',
      type: 'Full-time',
      description: 'Analyze credit data and financial statements to determine creditworthiness.',
    },
    {
      title: 'Marketing Officer',
      department: 'Marketing',
      location: 'Kampala',
      type: 'Full-time',
      description: 'Develop and execute marketing strategies to grow our customer base.',
    },
    {
      title: 'IT Support Specialist',
      department: 'Information Technology',
      location: 'Kampala',
      type: 'Full-time',
      description: 'Provide technical support and maintain our IT infrastructure.',
    },
  ];

  const benefits = [
    'Competitive salary packages',
    'Health insurance coverage',
    'Professional development opportunities',
    'Performance bonuses',
    'Paid time off and holidays',
    'Collaborative work environment',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Careers" 
          subtitle="Join our team and help us empower Ugandan families and businesses"
          backgroundImage="https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY5MTc3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        />

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4">
                Why Join Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
                Build Your Career With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We offer a dynamic work environment where your contributions matter
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-gray-50 p-6 rounded-xl"
                >
                  <div className="w-2 h-2 bg-[#00A99D] rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4">
                Open Positions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
                Current Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our available positions and find your perfect role
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h3 className="text-2xl font-bold text-[#00A99D] mb-2">{position.title}</h3>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} className="text-[#00A99D]" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-[#00A99D]" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-[#00A99D]" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:ml-8">
                      <Button className="bg-[#00A99D] hover:bg-[#008B82] text-white group-hover:shadow-lg transition-all duration-300">
                        Apply Now
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Application CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center bg-[#E6F7F6] rounded-2xl p-12"
            >
              <h3 className="text-2xl font-bold text-[#00A99D] mb-4">
                Don't see a position that fits?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg" className="bg-[#00A99D] hover:bg-[#008B82] text-white">
                Submit Your Resume
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}