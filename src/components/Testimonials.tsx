import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Nakato',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1687422809654-579d81c29d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc21hbGwlMjBidXNpbmVzcyUyMG93bmVyfGVufDF8fHx8MTc2OTExNDgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Accus Capital helped me expand my retail shop with their SME loan. The process was quick, and the interest rates were very competitive. I highly recommend them!',
      rating: 5,
    },
    {
      name: 'John Mugisha',
      role: 'Civil Engineer',
      image: 'https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY5MTc3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Got a personal loan to handle an emergency. The approval was within hours, and funds were in my account the next day. Excellent customer service throughout!',
      rating: 5,
    },
    {
      name: 'Grace Namuli',
      role: 'Teacher & Homeowner',
      image: 'https://images.unsplash.com/photo-1623244736886-1108836855e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFmcmljYW4lMjBmYW1pbHklMjBob21lfGVufDF8fHx8MTc2OTE3NzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Their mortgage loan made my dream of owning a home come true. The team was professional, transparent, and supportive throughout the entire process.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-[#E6F7F6] rounded-full flex items-center justify-center">
                <Quote className="text-[#00A99D]" size={24} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#00A99D] fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#00A99D]"
                />
                <div>
                  <div className="font-bold text-[#00A99D]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-[#E6F7F6] rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Star className="text-[#00A99D] fill-current" size={24} />
              <span className="font-bold text-[#00A99D]">4.9/5</span>
              <span className="text-gray-600">Rating</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-[#00A99D]">50,000+</span>
              <span className="text-gray-600">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}