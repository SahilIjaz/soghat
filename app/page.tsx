'use client'
import Head from 'next/head';
import { ShoppingCart, Search, Menu, X, ChevronRight, Truck, Shield, Award, Leaf, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    {
      name: "Aseel Dates (کھجور - بلوچستان/سندھ)",
      icon: "🍇",
      description: "Premium Aseel dates from Balochistan & Sindh",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Dates_fruit.JPG",
      itemCount: "20+ varieties"
    },
    {
      name: "Karachi Halwa (کراچی حلوہ)",
      icon: "🍬",
      description: "Chewy Karachi Halwa from Sindh",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Karachi_Halwa.jpg",
      itemCount: "10+ varieties"
    },
    {
      name: "UHT Milk (یو ایچ ٹی دودھ)",
      icon: "🥛",
      description: "Long-life milk available nationwide",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Milk_cartons.jpg",
      itemCount: "5+ brands"
    },
    {
      name: "Canned/Frozen Meats (گوشت - کنڈی/فروزن)",
      icon: "🥩",
      description: "Ready-to-eat canned or frozen meats",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Canned_meat.jpg",
      itemCount: "10+ varieties"
    },
    {
      name: "Shelf-Stable Lentils & Beans (دالیں اور لوبیا)",
      icon: "🫘",
      description: "High-quality lentils and beans",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Lentils.jpg",
      itemCount: "15+ varieties"
    },
    {
      name: "Basmati Rice (چاول - پنجاب)",
      icon: "🍚",
      description: "Aromatic Basmati rice from Punjab",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Basmati_rice.jpg",
      itemCount: "8+ varieties"
    },
    {
      name: "Dried Fruits (خشک میوہ - ہنزہ)",
      icon: "🍑",
      description: "Apricots, figs & more from Hunza Valley",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Dried_apricots.jpg",
      itemCount: "25+ varieties"
    },
    {
      name: "Kinnow Juice & Citrus (سنترہ - سرگودھا)",
      icon: "🍊",
      description: "Fresh & preserved citrus products",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kinnow.jpg",
      itemCount: "10+ options"
    }
  ];

  const benefits = [
    { icon: "💪", title: "High in Protein", desc: "Essential nutrients" },
    { icon: "❤️", title: "Heart Healthy", desc: "Cardiovascular wellness" },
    { icon: "🧠", title: "Brain Boost", desc: "Mental clarity" },
    { icon: "⚡", title: "Energy Rich", desc: "Natural vitality" }
  ];

  const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta"];

  return (
    <>
      <Head>
        <title>Meva Ghar - Premium Dry Fruits & Nuts in Pakistan | میوہ گھر</title>
        <meta name="description" content="Buy premium quality dry fruits and nuts online in Pakistan. Free delivery across major cities. بہترین خشک میوہ جات" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Delivery across Pakistan
                </span>
                <span className="hidden md:inline">Free shipping on orders over Rs. 3000</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  0300-1234567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  م
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent block">
                    Meva Ghar
                  </span>
                  <span className="text-xs text-gray-500">میوہ گھر</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition">Home</a>
                <a href="#categories" className="text-gray-700 hover:text-amber-600 font-medium transition">Categories</a>
                <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium transition">About</a>
                <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition">Contact</a>
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
                  <a href="#categories" className="text-gray-700 hover:text-amber-600 font-medium">Categories</a>
                  <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium">About</a>
                  <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium">Contact</a>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Leaf className="w-4 h-4" />
                  <span className="text-sm font-medium">100% Natural & Fresh | قدرتی اور تازہ</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Premium Dry Fruits & Nuts
                  <span className="block text-2xl md:text-4xl mt-2 text-amber-100">بہترین خشک میوہ جات</span>
                </h1>
                <p className="text-lg text-amber-50">
                  Pakistan's trusted source for premium quality dry fruits and nuts. Delivered fresh to your doorstep across all major cities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#categories" className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition flex items-center gap-2">
                    Browse Categories
                    <ChevronRight className="w-5 h-5" />
                  </a>
                  <a href="tel:03001234567" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition">
                    Call Now
                  </a>
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
                  <h3 className="font-semibold text-lg mb-1">Free Delivery</h3>
                  <p className="text-gray-600">Orders over Rs. 3000</p>
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
                  <h3 className="font-semibold text-lg mb-1">Trusted Brand</h3>
                  <p className="text-gray-600">5000+ happy customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Categories Section */}
        <section id="categories" className="py-16 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3">Shop by Category</h2>
              <p className="text-xl text-amber-800 mb-2">اقسام کے مطابق خریداری کریں</p>
              <p className="text-gray-600 text-lg">Click on any category to explore all products</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`/category/${category.name.toLowerCase().split(' ')[0]}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-6xl mb-2">{category.icon}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-1 group-hover:text-amber-700 transition">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-700 font-semibold text-sm">{category.itemCount}</span>
                      <span className="text-amber-600 group-hover:translate-x-1 transition flex items-center gap-1">
                        View Products
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Health Benefits</h2>
              <p className="text-gray-600 text-lg">صحت کے فوائد</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-amber-50 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">We Deliver Across Pakistan</h2>
              <p className="text-gray-700 text-lg">ہم پورے پاکستان میں ترسیل کرتے ہیں</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cities.map((city) => (
                <div key={city} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition">
                  <MapPin className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold">{city}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-gray-600">And many more cities across Pakistan</p>
          </div>
        </section>

        {/* Contact/Order Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-amber-700 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-amber-50 mb-8 text-lg">
              Call us now or WhatsApp for quick orders | فوری آرڈر کے لیے کال یا واٹس ایپ کریں
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:03001234567" className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 0300-1234567
              </a>
              <a href="https://wa.me/923001234567" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2">
                WhatsApp Order
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email for updates"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="about" className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    م
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white block">Meva Ghar</span>
                    <span className="text-xs text-gray-400">میوہ گھر</span>
                  </div>
                </div>
                <p className="text-sm">
                  Pakistan's premier destination for premium quality dry fruits, nuts, and healthy snacks.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
                  <li><a href="#categories" className="hover:text-amber-400 transition">All Categories</a></li>
                  <li><a href="#about" className="hover:text-amber-400 transition">About Us</a></li>
                  <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Customer Care</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-400 transition">How to Order</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Delivery Info</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Return Policy</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Bulk Orders</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    0300-1234567
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@mevaghar.pk
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Lahore, Pakistan
                  </li>
                  <li className="pt-2">
                    <div className="flex gap-3">
                      <a href="#" className="hover:text-amber-400 transition">📘 Facebook</a>
                      <a href="#" className="hover:text-amber-400 transition">📷 Instagram</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">© 2024 Meva Ghar. All rights reserved. | تمام حقوق محفوظ ہیں</p>
              <div className="flex gap-4 mt-4 md:mt-0 text-sm">
                <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}