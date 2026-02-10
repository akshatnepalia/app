import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Package, TruckIcon, Award, Users, ShieldCheck, Building2, Hospital, Hotel, GraduationCap, Store, MessageCircle, Phone } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { heroContent, products, whyChooseUs, industries, stats, testimonials, companyInfo } from '../mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you within 24 hours with bulk pricing details.",
    });
    setFormData({ name: '', phone: '', company: '', product: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in bulk orders. Please share details about your products and pricing.");
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, '_blank');
  };

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Award size={16} />
                <span>Trusted Since {companyInfo.established}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {heroContent.headline}
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {heroContent.subheadline}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {heroContent.cta}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Us
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                {heroContent.trustBadges.map((badge, index) => {
                  const Icon = LucideIcons[badge.icon];
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-2">
                        {Icon && <Icon size={24} className="text-orange-600" />}
                      </div>
                      <p className="font-bold text-slate-900">{badge.label}</p>
                      <p className="text-xs text-slate-600">{badge.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1627915589334-14a3c3e3a741" 
                  alt="Warehouse Distribution"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-orange-600">500+</p>
                      <p className="text-xs text-slate-600">Happy Clients</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">50K+</p>
                      <p className="text-xs text-slate-600">Products Delivered</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">100%</p>
                      <p className="text-xs text-slate-600">Quality Assured</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Products</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              High-quality medical, hygiene, and cleaning products for bulk buyers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-slate-100 hover:border-orange-200">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                          {size}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Bulk Quote
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Vividh India Solutions?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your trusted partner for premium quality products at competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = LucideIcons[item.icon];
              return (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4">
                      {Icon && <Icon size={28} className="text-orange-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">
              Delivering quality products to diverse sectors across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = LucideIcons[industry.icon];
              return (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:bg-orange-50 hover:shadow-lg transition-all group">
                  <div className="w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={32} className="text-orange-600" />}
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{industry.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-300">
              Trusted by hundreds of businesses across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-slate-700 hover:bg-white/15 transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-orange-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-200 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Bulk Quote Now</h2>
              <p className="text-lg text-slate-600">
                Share your requirements and get the best pricing for bulk orders
              </p>
            </div>

            <Card className="shadow-xl border-2 border-slate-100">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter 10-digit mobile number"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Product Interest</label>
                      <Input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        placeholder="e.g., Sharp Containers, Paper Rolls"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Requirements</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your bulk order requirements..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Enquiry
                    <ArrowRight className="ml-2" size={20} />
                  </Button>

                  <div className="flex items-center justify-center gap-4 pt-4">
                    <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors">
                      <Phone size={18} />
                      <span className="font-semibold">{companyInfo.phone}</span>
                    </a>
                    <span className="text-slate-400">or</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-semibold"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp Us</span>
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Place Your Bulk Order?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Get competitive pricing, timely delivery, and premium quality products
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = `tel:${companyInfo.phone}`}
              className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg"
            >
              <Phone className="mr-2" size={20} />
              Call: {companyInfo.phone}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
