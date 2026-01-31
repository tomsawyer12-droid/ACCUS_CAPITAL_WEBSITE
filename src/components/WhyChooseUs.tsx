import { motion } from 'motion/react';
import { Zap, Shield, Headphones, Award } from 'lucide-react';

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Approval',
      description: 'Get your loan approved within minutes and receive funds in your account within 24 hours.',
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Licensed by Bank of Uganda with over 15 years of reliable service to Ugandan communities.',
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Our dedicated support team is available round the clock to assist you with any queries.',
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: Award,
      title: 'Competitive Interest Rates',
      description: 'Enjoy some of the lowest interest rates in the market with transparent pricing and no hidden fees.',
      color: 'from-[#00A99D] to-[#008B82]',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E6F7F6] rounded-full blur-3xl opacity-30 -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6F7F6] rounded-full blur-3xl opacity-30 -mr-48 -mb-48"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
            Your Trusted Financial Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine speed, trust, and excellent service to provide you with the best loan experience
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="relative">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                >
                  <benefit.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#00A99D] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>

                {/* Hover effect underline */}
                <div className={`h-1 w-0 bg-gradient-to-r ${benefit.color} group-hover:w-16 transition-all duration-300 mt-3 rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}