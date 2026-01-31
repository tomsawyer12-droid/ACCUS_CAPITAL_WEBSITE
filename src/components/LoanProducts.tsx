import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { homePageProducts } from '../data/products';

export function LoanProducts() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
            Loan Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your unique financial needs
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {homePageProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onClick={() => handleProductClick(product.id)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Card Header with Image */}
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Teal Gradient Overlay - Only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D] to-[#008B82] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                
                {/* Bottom gradient for title readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Title on Image */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{product.title}</h3>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-16 h-16 border-4 border-white/30 rounded-full"></div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-[#00A99D] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-[#00A99D] hover:bg-[#008B82] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    handleProductClick(product.id);
                  }}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/products">
            <Button
              size="lg"
              className="bg-[#00A99D] hover:bg-[#008B82] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View All Products
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
          </Link>
          <p className="text-gray-600 mt-6">Explore our complete range of loan solutions</p>
        </motion.div>
      </div>
    </section>
  );
}