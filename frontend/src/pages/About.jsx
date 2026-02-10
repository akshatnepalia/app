import React from 'react';
import { Award, Target, Users, TrendingUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyInfo, stats } from '../mockData';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      description: "We never compromise on product quality and maintain strict quality control measures."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients' success is our success. We prioritize customer satisfaction above everything."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously improving our products and services to meet evolving market demands."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Transparent business practices and honest dealings with all our stakeholders."
    }
  ];

  const milestones = [
    { year: "2015", event: "Company Founded in Jaipur, Rajasthan" },
    { year: "2017", event: "GST Registration & Expansion to Pan-India" },
    { year: "2019", event: "Launched Medical Sharp Containers Line" },
    { year: "2021", event: "Expanded Product Range to Hygiene Products" },
    { year: "2023", event: "Achieved 500+ Satisfied Clients Milestone" },
    { year: "2025", event: "Continuing to Serve India with Excellence" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vividh India Solutions</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A decade of excellence in manufacturing and distributing premium medical, hygiene, and cleaning products for B2B clients across India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg" 
                alt="Business Meeting"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Award size={16} />
                <span>Established {companyInfo.established}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Your Trusted Partner for Bulk Medical & Hygiene Products
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in {companyInfo.established}, Vividh India Solutions has established itself as a reliable manufacturer and distributor of premium medical sharp containers, paper products, and cleaning supplies. Based in Jaipur, Rajasthan, we serve hospitals, hotels, corporate offices, and various industries across India.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Under the leadership of our CEO, {companyInfo.ceo}, we have built a reputation for delivering quality products at competitive prices with timely delivery. Our commitment to excellence and customer satisfaction has helped us build lasting relationships with over 500 satisfied clients.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                  <p className="text-sm text-slate-600 mb-1">Business Type</p>
                  <p className="text-lg font-bold text-slate-900">{companyInfo.businessType}</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                  <p className="text-sm text-slate-600 mb-1">GST Registered</p>
                  <p className="text-lg font-bold text-slate-900">Since 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg text-orange-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600">
              A decade of growth, innovation, and customer satisfaction
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20 pb-12 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-1 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 px-4 py-2 rounded-lg">
                          <p className="text-2xl font-bold text-orange-600">{milestone.year}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-slate-900">{milestone.event}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
            <p className="text-lg text-slate-600">
              Experienced leadership driving our vision forward
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6 p-8">
                <div className="md:col-span-1 flex justify-center items-start">
                  <div className="w-40 h-40 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
                    <Users size={64} className="text-orange-600" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{companyInfo.ceo}</h3>
                  <p className="text-orange-600 font-semibold mb-4">CEO & Founder</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    With over a decade of experience in the medical supplies and distribution industry, {companyInfo.ceo} founded Vividh India Solutions with a vision to provide quality products at affordable prices to bulk buyers across India.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span className="text-slate-700">10+ years industry experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span className="text-slate-700">Strong supplier relationships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span className="text-slate-700">Customer-first approach</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Know More?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get in touch with us to discuss your bulk order requirements
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
