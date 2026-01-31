import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Credit Scores: A Guide for Ugandan Borrowers',
    excerpt: 'Learn how credit scores work in Uganda and practical tips to improve your creditworthiness for better loan terms.',
    image: 'https://images.unsplash.com/photo-1764231467854-db276777da58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjkxMzMwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Financial Tips',
    date: 'January 15, 2026',
    readTime: '5 min read',
    author: 'Sarah Nakato'
  },
  {
    id: '2',
    title: '5 Ways to Grow Your Small Business with Strategic Financing',
    excerpt: 'Discover how smart financing decisions can help your small business expand and reach new markets in Uganda.',
    image: 'https://images.unsplash.com/photo-1531058240690-006c446962d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzY5MTc4MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Business Growth',
    date: 'January 12, 2026',
    readTime: '7 min read',
    author: 'John Mugerwa'
  },
  {
    id: '3',
    title: 'Home Ownership Made Easy: Your Mortgage Application Guide',
    excerpt: 'Everything you need to know about applying for a mortgage in Uganda, from documentation to approval.',
    image: 'https://images.unsplash.com/photo-1762374974129-f9266d9c4efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb3duZXJzaGlwJTIwZmFtaWx5fGVufDF8fHx8MTc2OTE4MTgxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mortgages',
    date: 'January 8, 2026',
    readTime: '6 min read',
    author: 'Grace Nankya'
  },
  {
    id: '4',
    title: 'Investing in Education: Making Student Loans Work for You',
    excerpt: 'A comprehensive look at education financing options and how to manage student loans effectively.',
    image: 'https://images.unsplash.com/photo-1653945475806-b7ec8b12f154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBncmFkdWF0ZXxlbnwxfHx8fDE3NjkxODE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Education',
    date: 'January 5, 2026',
    readTime: '5 min read',
    author: 'David Okello'
  },
  {
    id: '5',
    title: 'Agricultural Financing: Supporting Uganda\'s Farmers',
    excerpt: 'How agricultural loans can help farmers invest in equipment, seeds, and sustainable farming practices.',
    image: 'https://images.unsplash.com/photo-1702373749921-3ed85367c2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm18ZW58MXx8fHwxNzY5MTYxMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Agriculture',
    date: 'January 2, 2026',
    readTime: '6 min read',
    author: 'Mary Akello'
  },
  {
    id: '6',
    title: 'Personal Finance Management: Budgeting for Success',
    excerpt: 'Master the art of budgeting and financial planning to achieve your personal and family goals.',
    image: 'https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBhZnJpY2F8ZW58MXx8fHwxNzY5MDY4MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Financial Planning',
    date: 'December 28, 2025',
    readTime: '8 min read',
    author: 'Peter Ssemakula'
  }
];

export function BlogGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
            Latest Insights & News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert advice, financial tips, and industry updates from Accus Capital
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00A99D] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Tag size={14} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#00A99D] mb-3 group-hover:text-[#008B82] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    By <span className="text-[#00A99D] font-semibold">{post.author}</span>
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-[#00A99D] hover:text-[#008B82] font-semibold flex items-center gap-1 group/link"
                  >
                    Read More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="bg-[#00A99D] hover:bg-[#008B82] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}