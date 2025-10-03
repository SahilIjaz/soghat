'use client'
import Head from 'next/head';
import { ShoppingCart, Search, Menu, X, ChevronRight, Star, Truck, Shield, Clock, Award, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Premium California Almonds",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500",
      rating: 4.9,
      category: "Almonds",
      weight: "500g"
    },
    {
      id: 2,
      name: "Jumbo Cashew Nuts",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=500",
      rating: 4.8,
      category: "Cashews",
      weight: "500g"
    },
    {
      id: 3,
      name: "Premium Walnuts",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1622484211850-7b5a7c4afc9e?w=500",
      rating: 4.7,
      category: "Walnuts",
      weight: "500g"
    },
    {
      id: 4,
      name: "Organic Medjool Dates",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1577003833154-a2e8e2a16f3d?w=500",
      rating: 5.0,
      category: "Dates",
      weight: "500g"
    },
    {
      id: 5,
      name: "Turkish Dried Apricots",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500",
      rating: 4.6,
      category: "Dried Fruits",
      weight: "500g"
    },
    {
      id: 6,
      name: "Roasted Pistachios",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500",
      rating: 4.9,
      category: "Pistachios",
      weight: "500g"
    },
    {
      id: 7,
      name: "Mixed Dry Fruits Premium",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1607623488503-21394956ad50?w=500",
      rating: 4.8,
      category: "Mix",
      weight: "500g"
    },
    {
      id: 8,
      name: "Golden Raisins",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1580498338548-d7b8b47e8c63?w=500",
      rating: 4.5,
      category: "Raisins",
      weight: "500g"
    }
  ];

  const categories = [
    { name: "Almonds", icon: "🥜" },
    { name: "Cashews", icon: "🌰" },
    { name: "Walnuts", icon: "🥥" },
    { name: "Dates", icon: "🍇" },
    { name: "Pistachios", icon: "🌿" },
    { name: "Dried Fruits", icon: "🍑" },
    { name: "Trail Mix", icon: "🥗" },
    { name: "Gift Boxes", icon: "🎁" }
  ];

  const benefits = [
    { icon: "💪", title: "High in Protein", desc: "Essential nutrients for your body" },
    { icon: "❤️", title: "Heart Healthy", desc: "Promotes cardiovascular wellness" },
    { icon: "🧠", title: "Brain Boost", desc: "Omega-3 for mental clarity" },
    { icon: "⚡", title: "Energy Rich", desc: "Natural source of vitality" }
  ];

  return (
    <>
      <Head>
        <title>NutriVault - Premium Dry Fruits & Nuts Store</title>
        <meta name="description" content="Shop premium quality dry fruits, nuts, and healthy snacks delivered fresh to your door" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  NV
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                  NutriVault
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition">Home</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition">Shop</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition">Categories</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition">About</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition">Contact</a>
              </nav>

              {/* Right Actions */}
              <div className="flex items-center space-x-4">
                <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button
                  className="md:hidden p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t">
                <nav className="flex flex-col space-y-3">
                  <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">Home</a>
                  <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">Shop</a>
                  <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">Categories</a>
                  <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">About</a>
                  <a href="#" className="text-gray-700 hover:text-amber-600 font-medium">Contact</a>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-amber-700 to-orange-700 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Leaf className="w-4 h-4" />
                  <span className="text-sm font-medium">100% Natural & Organic</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Premium Dry Fruits & Nuts Delivered Fresh
                </h1>
                <p className="text-xl text-amber-50">
                  Discover nature's finest treasures. Handpicked premium nuts and dried fruits sourced from the best farms worldwide.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition flex items-center gap-2">
                    Shop Now
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800"
                  alt="Premium dry fruits and nuts"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Truck className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Free Shipping</h3>
                  <p className="text-gray-600">On orders over $40</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Premium Quality</h3>
                  <p className="text-gray-600">100% natural products</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Certified Organic</h3>
                  <p className="text-gray-600">Trusted & certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Health Benefits of Dry Fruits</h2>
              <p className="text-gray-600 text-lg">Nature's perfect superfood packed with nutrients</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:border-amber-600 border-2 border-transparent transition text-center group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition">{category.icon}</div>
                  <div className="font-semibold text-gray-800 text-sm">{category.name}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
                <p className="text-gray-600">Handpicked premium selection</p>
              </div>
              <button className="text-amber-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View All <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-amber-50 rounded-xl overflow-hidden hover:shadow-xl transition group">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-amber-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.weight}
                    </div>
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Organic
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-amber-700 font-semibold mb-1 uppercase tracking-wide">{product.category}</div>
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-500">(245)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-700">${product.price}</span>
                      <button
                        onClick={() => setCartCount(cartCount + 1)}
                        className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition font-medium"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose NutriVault?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">Farm Fresh Quality</h3>
                      <p className="text-gray-700">Sourced directly from certified organic farms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">No Preservatives</h3>
                      <p className="text-gray-700">100% natural without any artificial additives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">Quality Tested</h3>
                      <p className="text-gray-700">Every batch tested for purity and quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">Eco-Friendly Packaging</h3>
                      <p className="text-gray-700">Sustainable packaging that cares for the planet</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1508747703725-719777637510?w=600"
                  alt="Quality almonds"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-amber-700 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get 15% Off Your First Order</h2>
            <p className="text-amber-50 mb-8 text-lg">
              Subscribe to our newsletter for exclusive deals and healthy eating tips
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    NV
                  </div>
                  <span className="text-2xl font-bold text-white">NutriVault</span>
                </div>
                <p className="text-sm">
                  Your trusted source for premium quality dry fruits, nuts, and healthy snacks delivered fresh.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-400 transition">About Us</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Shop All</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Recipes</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Customer Care</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-400 transition">Help Center</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Track Order</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Returns Policy</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Bulk Orders</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-sm">
                  <li>Email: hello@nutrivault.com</li>
                  <li>Phone: +1 (555) 789-0123</li>
                  <li>Hours: Mon-Sun 9AM-9PM</li>
                  <li className="pt-2">
                    <div className="flex gap-3">
                      <a href="#" className="hover:text-amber-400 transition">📘</a>
                      <a href="#" className="hover:text-amber-400 transition">📷</a>
                      <a href="#" className="hover:text-amber-400 transition">🐦</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">© 2024 NutriVault. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0 text-sm">
                <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
                <a href="#" className="hover:text-amber-400 transition">Refund Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}