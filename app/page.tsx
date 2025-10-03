



'use client'
import Head from 'next/head';
import { ShoppingCart, Search, Menu, X, ChevronRight, Truck, Shield, Award, Leaf, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    {
      name: "Punjab Specialties",
      urduName: "پنجاب کی خاص چیزیں",
      icon: "🟫🍬",
      description: "Delicious Multani Sohan Halwa topped with premium dry fruits, a true taste of Punjab.",
      image: "https://hafizhalwa.com/cdn/shop/files/DSC00617_1.jpg?v=1741201030&width=1946",
      itemCount: "20+ varieties"
    },
    {
      name: "Sindh Specialties",
      urduName: "سندھ کی خاص چیزیں",
      icon: "🟤🌴",
      description: "Khairpur Aseel Dates, soft, sweet, and export-quality, representing Sindh’s finest.",
      image: "https://ranveerbrar.com/wp-content/uploads/2021/11/Rose-Halwa-scaled-scaled.jpg",
      itemCount: "10+ varieties"
    },
    {
      name: "KPK Specialties",
      urduName: "خیبر پختونخوا کی خاص چیزیں",
      icon: "🌰🏔️",
      description: "Premium Chilgoza (pine nuts) from KPK, rich in flavor and protein.",
      image: "https://www.maiva.co/cdn/shop/articles/introduction-_-uht--high-temperature-processing_44391446-c378-4752-805d-8742c94985dd_1200x.jpg?v=1721028110",
      itemCount: "5+ brands"
    },
    {
      name: "Balochistan Specialties",
      urduName: "بلوچستان کی خاص چیزیں",
      icon: "🍂🍇",
      description: "Panjgur and Turbat dates with an earthy desert touch, iconic Balochistan taste.",
      image: "https://www.thedailymeal.com/img/gallery/these-are-the-11-unhealthiest-canned-meats-you-can-buy/l-intro-1745586539.jpg",
      itemCount: "10+ varieties"
    },
    {
      name: "Gilgit-Baltistan Specialties",
      urduName: "گلگت بلتستان کی خاص چیزیں",
      icon: "🍑🏔️",
      description: "Dried apricots from GB, naturally sweet with a mountain-fresh vibe.",
      image: "https://keepfitkingdom.com/wp-content/uploads/2021/01/Beans-Top-5-High-Protein-Varieties-Youll-Love-Keep-Fit-Kingdom-842x472.jpg",
      itemCount: "15+ varieties"
    },
    {
      name: "Azad Kashmir Specialties",
      urduName: "آزاد کشمیر کی خاص چیزیں",
      icon: "🥜🪵",
      description: "Authentic walnuts in shell, freshly cracked on a traditional wooden surface.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhCr9E1pvIdlRu-3fDNBap-Hn6t3WDwSnbw&s",
      itemCount: "8+ varieties"
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
        <title>Meva Ghar - Premium Regional Specialties in Pakistan | میوہ گھر</title>
        <meta name="description" content="Buy premium quality regional specialties online in Pakistan. Free delivery across major cities." />
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
                  Pakistan's Regional Specialties
                  <span className="block text-2xl md:text-4xl mt-2 text-amber-100">پاکستان کی علاقائی مصنوعات</span>
                </h1>
                <p className="text-lg text-amber-50">
                  Discover authentic flavors from every corner of Pakistan. Premium quality products delivered fresh to your doorstep.
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
                  alt="Premium regional specialties"
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
                  <p className="text-gray-600">100% authentic products</p>
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

        {/* Main Categories Section - 3 per row with hover animations */}
        <section id="categories" className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Shop by Region</h2>
              <p className="text-2xl text-amber-800 mb-2">علاقے کے مطابق خریداری کریں</p>
              <p className="text-gray-600 text-lg">Hover to explore each region's specialties</p>
            </div>

            {/* 3 Categories per row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`/category/${category.name.toLowerCase().split(' ')[0]}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer relative"
                >
                  {/* Card with 80 height */}
                  <div className="relative overflow-hidden h-80">
                    {/* Image that dims on hover */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition duration-700 group-hover:brightness-[0.3]"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Content that appears on hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      {/* Giant emoji that scales up */}
                      <div className="text-8xl mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        {category.icon}
                      </div>

                      {/* English name */}
                      <h3 className="text-white font-bold text-3xl text-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {category.name}
                      </h3>

                      {/* Urdu name */}
                      <p className="text-amber-200 text-2xl text-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {category.urduName}
                      </p>

                      {/* Description */}
                      <p className="text-white text-center text-lg mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        {category.description}
                      </p>

                      {/* Item count badge */}
                      <span className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        {category.itemCount}
                      </span>
                    </div>

                    {/* Default state - bottom label that fades out on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-white font-bold text-2xl mb-1">
                        {category.name}
                      </h3>
                      <p className="text-amber-200 text-lg">
                        {category.urduName}
                      </p>
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Regional Specialties</h2>
              <p className="text-gray-600 text-lg">علاقائی مصنوعات کیوں منتخب کریں</p>
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
                  Pakistan's premier destination for authentic regional specialties from across the country.
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