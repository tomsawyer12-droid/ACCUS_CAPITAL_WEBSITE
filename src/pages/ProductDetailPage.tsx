import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { homePageProducts } from '../data/products';
import { ArrowLeft, CheckCircle2, Users, FileText, DollarSign, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = homePageProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-[#00A99D] hover:bg-[#008B82] text-white"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center text-[#00A99D] hover:text-[#008B82] mb-8 font-semibold transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </motion.button>

          {/* Hero Section with Image and Key Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Key Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-5xl font-bold text-[#00A99D] mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#E6F7F6] p-4 rounded-xl">
                  <div className="flex items-center text-[#00A99D] mb-2">
                    <DollarSign size={20} className="mr-2" />
                    <span className="font-semibold text-sm">Max Amount</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{product.maxAmount}</p>
                </div>
                <div className="bg-[#E6F7F6] p-4 rounded-xl">
                  <div className="flex items-center text-[#00A99D] mb-2">
                    <Calendar size={20} className="mr-2" />
                    <span className="font-semibold text-sm">Repayment</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{product.repaymentPeriod}</p>
                </div>
                <div className="bg-[#E6F7F6] p-4 rounded-xl">
                  <div className="flex items-center text-[#00A99D] mb-2">
                    <FileText size={20} className="mr-2" />
                    <span className="font-semibold text-sm">Interest Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{product.interestRate}</p>
                </div>
                <div className="bg-[#E6F7F6] p-4 rounded-xl">
                  <div className="flex items-center text-[#00A99D] mb-2">
                    <Users size={20} className="mr-2" />
                    <span className="font-semibold text-sm">Process</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Fast & Easy</p>
                </div>
              </div>

              <Button className="w-full bg-[#00A99D] hover:bg-[#008B82] text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Apply Now
              </Button>
            </motion.div>
          </div>

          {/* Detailed Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.detailedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle2 className="text-[#00A99D] mr-4 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Eligibility Requirements</h2>
            <div className="bg-gradient-to-br from-[#E6F7F6] to-[#F0FFFE] p-8 rounded-2xl">
              <ul className="space-y-4">
                {product.eligibility.map((req, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-700">
                    <span className="w-3 h-3 bg-[#00A99D] rounded-full mr-4"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Application Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.applicationProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00A99D] text-white rounded-full font-bold mb-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-semibold">{step}</p>
                  </div>
                  {index < product.applicationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-[#00A99D] transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-[#00A99D] to-[#008B82] text-white p-12 rounded-2xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-8 opacity-95">Apply now and get approved in as little as 24-48 hours</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#00A99D] hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold">
                Apply Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
