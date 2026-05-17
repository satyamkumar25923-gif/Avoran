import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 'prod_1',
      name: 'Royal Elephant Glass Art',
      price: 3499,
      image: '/glass_painting.webp',
      badge: null
    },
    {
      id: 'prod_2',
      name: 'Terracotta Warli Pot',
      price: 1899,
      image: '/pot_art.webp',
      badge: 'Bestseller'
    },
    {
      id: 'prod_3',
      name: 'Brass Mandala Wall Decor',
      price: 5200,
      image: '/wall_decor.webp',
      badge: null
    },
    {
      id: 'prod_4',
      name: 'Handcrafted Diyas Set',
      price: 899,
      image: '/hero_bg.webp',
      badge: null
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_bg.webp" 
            alt="Avoran Indian Crafts" 
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
          {/* Subtle gradient overlay for extra premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-accent tracking-[0.3em] uppercase text-sm md:text-md mb-4 font-medium">
              Crafted Traditions, Modern Elegance
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-light mb-6 leading-tight">
              Discover the Soul of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Indian Artistry
              </span>
            </h1>
            <p className="text-light text-opacity-90 max-w-2xl mx-auto mb-10 text-sm md:text-base font-light">
              Elevate your space with premium handcrafted pottery, exquisite glass paintings, and luxury traditional decor that whispers stories of heritage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/shop" className="group flex items-center px-8 py-4 bg-primary text-white font-medium hover:bg-maroon transition-colors duration-300">
                <span>Shop Collection</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="group flex items-center px-8 py-4 border border-light text-light font-medium hover:bg-light hover:text-dark transition-all duration-300">
                <span>Our Story</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Curated Collections</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <Link to="/category/glass-paintings" className="group relative h-96 overflow-hidden flex items-end justify-center shadow-lg">
              <img src="/glass_painting.webp" alt="Glass Paintings" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative z-10 p-8 text-center w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-heading font-bold text-light mb-2 tracking-wide">Glass Paintings</h3>
                <p className="text-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">Discover Collection</p>
              </div>
            </Link>

            {/* Category 2 */}
            <Link to="/category/pot-art" className="group relative h-96 overflow-hidden flex items-end justify-center shadow-lg">
              <img src="/pot_art.webp" alt="Pot Art" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative z-10 p-8 text-center w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-heading font-bold text-light mb-2 tracking-wide">Pottery & Clay Art</h3>
                <p className="text-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">Discover Collection</p>
              </div>
            </Link>

            {/* Category 3 */}
            <Link to="/category/wall-decor" className="group relative h-96 overflow-hidden flex items-end justify-center shadow-lg">
              <img src="/wall_decor.webp" alt="Wall Decor" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative z-10 p-8 text-center w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-heading font-bold text-light mb-2 tracking-wide">Brass & Wall Decor</h3>
                <p className="text-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">Discover Collection</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Artisan Story Section */}
      <section className="py-20 bg-dark text-light">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-accent tracking-[0.2em] uppercase text-sm mb-4 font-medium">The Heart of Avoran</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">Crafted by Hands, Born from Heritage.</h3>
            <p className="text-light text-opacity-80 mb-8 font-light leading-relaxed">
              Every piece in our collection carries the fingerprints of Indian artisans who have perfected their craft over generations. By choosing Avoran, you aren't just buying decor—you're preserving tradition, supporting rural livelihoods, and bringing a piece of India's soul into your home.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors">
              <span className="uppercase tracking-widest text-sm">Read Our Story</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2 relative h-96 w-full">
             <div className="absolute inset-0 bg-primary opacity-20 transform translate-x-4 translate-y-4"></div>
             <img src="/hero_bg.webp" alt="Artisan Handcrafting" loading="lazy" className="relative z-10 w-full h-full object-cover shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Trending Masterpieces</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-primary hover:text-dark transition-colors font-medium">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4 shadow-sm border border-dark border-opacity-5">
                  <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-white bg-opacity-90 text-dark py-3 font-semibold uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-sm text-dark mb-1 tracking-wide">{product.name}</h3>
                <p className="text-primary font-bold text-sm">₹{product.price.toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/shop" className="inline-block border border-dark text-dark px-8 py-3 font-medium hover:bg-dark hover:text-white transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
