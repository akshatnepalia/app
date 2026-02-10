import React from 'react';
import { Shield, IndianRupee, TruckIcon, Headphones, PackageCheck, Building2, CheckCircle2, Star } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { whyChooseUs } from '../mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Manufacturer Direct Pricing",
      description: "Cut out the middlemen and get the best prices directly from the source",
      image: "https://images.unsplash.com/photo-1662001164155-2d04179a7b22"
    },
    {
      title: "Quality Assurance",
      description: "All products undergo rigorous testing and quality checks before dispatch",
      image: "https://images.unsplash.com/photo-1655313719494-1d700d4aedd4"
    },
    {
      title: "Pan-India Delivery",
      description: "Reliable logistics network ensuring timely delivery across all major cities",
      image: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e"
    }
  ];

  const advantages = [
    "No minimum order quantity for established clients",
    "Flexible payment terms for bulk orders",
    "Free samples available for quality verification",
    "Dedicated account manager for large clients",
    "Custom packaging solutions available",
    "Priority dispatch for urgent requirements",
    "Volume-based discounts on all products",
    "Technical support and product training"
  ];

  const comparisonData = [
    { feature: "Product Quality", us: "Premium WHO-compliant", others: "Standard quality" },
    { feature: "Pricing", us: "Direct manufacturer pricing", others: "Dealer/distributor markup" },
    { feature: "Delivery Time", us: "2-5 business days", others: "7-15 business days" },
    { feature: "Custom Solutions", us: "Available", others: "Limited options" },
    { feature: "Support", us: "24/7 dedicated support", others: "Business hours only" },
    { feature: "Payment Terms", us: "Flexible options", others: "Advance payment" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Vividh India Solutions?</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Experience the difference of working with a trusted partner committed to your success
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Competitive Advantages</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What makes us the preferred choice for bulk buyers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => {
              const Icon = LucideIcons[item.icon];
              return (
                <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-200 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {Icon && <Icon size={32} className="text-orange-600" />}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Benefits with Images */}
          <div className="grid lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Advantages */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Additional Benefits</h2>
              <p className="text-lg text-slate-600">
                More reasons to partner with us for your bulk order needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Compare</h2>
              <p className="text-lg text-slate-600">
                See why leading businesses choose Vividh India Solutions
              </p>
            </div>

            <Card className="overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                    <tr>
                      <th className="py-4 px-6 text-left text-lg font-bold">Feature</th>
                      <th className="py-4 px-6 text-left text-lg font-bold">
                        <div className="flex items-center gap-2">
                          <Star className="text-orange-400 fill-orange-400" size={20} />
                          Vividh India Solutions
                        </div>
                      </th>
                      <th className="py-4 px-6 text-left text-lg font-bold">Other Suppliers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="py-4 px-6 font-semibold text-slate-700">{row.feature}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-green-600" />
                            <span className="text-slate-900 font-medium">{row.us}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-slate-600">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Businesses</h2>
            <p className="text-xl text-orange-100">
              Join 500+ satisfied clients who trust us for their bulk orders
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-orange-100">Happy Clients</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl font-bold mb-2">10+</p>
              <p className="text-orange-100">Years Experience</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl font-bold mb-2">50K+</p>
              <p className="text-orange-100">Products Delivered</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-orange-100">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get in touch today and discover why businesses across India trust Vividh India Solutions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
                >
                  Get Started Today
                </Button>
                <Button 
                  size="lg"
                  onClick={() => window.location.href = 'tel:8875355666'}
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                >
                  Call: 8875355666
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
