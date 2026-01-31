import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'David Ssemakula',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MTc4Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Over 20 years of experience in financial services and microfinance leadership.',
    },
    {
      name: 'Grace Namuyiga',
      position: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjkxNzgzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Chartered accountant with expertise in financial planning and risk management.',
    },
    {
      name: 'Peter Mukasa',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBtYW5hZ2VyfGVufDF8fHx8MTc2OTE3ODM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Specialized in streamlining operations and enhancing customer service delivery.',
    },
    {
      name: 'Sarah Nakato',
      position: 'Head of Credit',
      image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwY29ycG9yYXRlfGVufDF8fHx8MTc2OTE3ODM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Expert in credit risk assessment and loan portfolio management.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to providing exceptional financial services
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00A99D]/90 via-[#00A99D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex space-x-3">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00A99D] hover:bg-[#00A99D] hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00A99D] hover:bg-[#00A99D] hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00A99D] mb-1">{member.name}</h3>
                  <p className="text-[#54585A] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Want to join our team?</p>
          <a
            href="#careers"
            className="inline-flex items-center text-[#00A99D] font-semibold hover:text-[#008B82] transition-colors group"
          >
            Join Our Team
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}