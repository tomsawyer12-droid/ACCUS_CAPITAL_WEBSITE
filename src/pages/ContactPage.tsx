import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['Plot 123, Kampala Road', 'Kampala, Uganda'],
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+256 700 123 456', '+256 800 123 456'],
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@accuscapital.ug', 'support@accuscapital.ug'],
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      color: 'from-[#00A99D] to-[#008B82]',
    },
  ];

  const branches = [
    { name: 'Kampala Branch', address: 'Plot 123, Kampala Road', phone: '+256 700 123 456' },
    // { name: 'Entebbe Branch', address: 'Plot 45, Airport Road', phone: '+256 700 123 457' },
    // { name: 'Jinja Branch', address: 'Plot 78, Main Street', phone: '+256 700 123 458' },
    // { name: 'Mbarara Branch', address: 'Plot 90, High Street', phone: '+256 700 123 459' },
    // { name: 'Gulu Branch', address: 'Plot 34, Churchill Drive', phone: '+256 700 123 460' },
    // { name: 'Mbale Branch', address: 'Plot 56, Republic Street', phone: '+256 700 123 461' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Contact Us" 
          subtitle="Get in touch with us - we're here to help you achieve your financial goals"
          backgroundImage="https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY5MTc3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        />

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <info.icon className="text-white" size={36} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#00A99D] mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#00A99D] mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+256 700 123 456" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      className="w-full h-32"
                    />
                  </div>
                  <Button 
                    size="lg"
                    className="w-full bg-[#00A99D] hover:bg-[#008B82] text-white"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Branches List */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#00A99D] mb-6">Our Branch</h2>
                <p className="text-gray-600 mb-8">
                  Visit our Kampala branch for personalized service.
                </p>
                <div className="space-y-4">
                  {branches.map((branch, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-[#E6F7F6] transition-colors duration-300"
                    >
                      <h3 className="text-lg font-bold text-[#00A99D] mb-2">{branch.name}</h3>
                      <div className="flex items-start space-x-2 text-gray-600 mb-2">
                        <MapPin size={16} className="mt-1 flex-shrink-0" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone size={16} className="flex-shrink-0" />
                        <span>{branch.phone}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#00A99D] mb-4">Find Us On The Map</h2>
              <p className="text-gray-600">Our head office location in Kampala</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-lg"
            >
              <p className="text-gray-500">Map Integration Placeholder</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
