import React from 'react';
import { Shield, CheckCircle2, Award, FileCheck, Package, Microscope, ClipboardCheck, TruckIcon } from 'lucide-react';
import { qualityAssurance } from '../mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Quality = () => {
  const qualitySteps = [
    {
      icon: Package,
      title: "Raw Material Selection",
      description: "We source premium raw materials from certified and verified suppliers with proper documentation and quality certificates."
    },
    {
      icon: Microscope,
      title: "Manufacturing Process",
      description: "State-of-the-art manufacturing facilities following WHO guidelines and international quality standards."
    },
    {
      icon: ClipboardCheck,
      title: "Quality Testing",
      description: "Rigorous testing at multiple stages including durability tests, safety checks, and performance validation."
    },
    {
      icon: FileCheck,
      title: "Certification & Documentation",
      description: "All products come with proper certifications, test reports, and compliance documentation."
    },
    {
      icon: Package,
      title: "Packaging Standards",
      description: "Hygienic and secure packaging using food-grade and medical-grade materials to ensure product integrity."
    },
    {
      icon: TruckIcon,
      title: "Storage & Dispatch",
      description: "Temperature-controlled storage and careful handling during dispatch to maintain product quality."
    }
  ];

  const certifications = [
    { name: "ISO Certified", description: "Quality management system" },
    { name: "GST Registered", description: "Government compliance" },
    { name: "WHO Guidelines", description: "Medical products compliance" },
    { name: "Safety Standards", description: "Product safety certified" }
  ];

  const testingParameters = [
    "Material strength and durability",
    "Chemical composition analysis",
    "Leak-proof and puncture resistance",
    "Color fastness and stability",
    "Dimensional accuracy",
    "Load bearing capacity",
    "Safety and toxicity tests",
    "Environmental impact assessment"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield size={16} />
              <span>100% Quality Assured</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Assurance</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our commitment to excellence ensures every product meets the highest standards of quality and safety
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1727091506038-5451111dc2fb" 
                alt="Quality Testing"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Quality Promise to You
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                At Vividh India Solutions, quality is not just a buzzword – it's the foundation of everything we do. We understand that our products are used in critical environments like hospitals, hotels, and commercial spaces where reliability and safety are paramount.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Every product undergoes stringent quality checks at multiple stages, from raw material procurement to final dispatch. Our quality assurance team ensures that each item meets international standards and exceeds customer expectations.
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-6">
                {qualityAssurance.map((item, index) => (
                  <Card key={index} className="border-2 border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Steps */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Quality Control Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive 6-step process ensuring every product meets our stringent quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySteps.map((step, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <step.icon size={28} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-green-600 mb-2">STEP {index + 1}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Testing</h2>
              <p className="text-lg text-slate-600">
                Every product is tested against multiple parameters before approval
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {testingParameters.map((parameter, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">{parameter}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-green-100">
              Fully certified and compliant with national and international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-slate-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden shadow-2xl">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Shield size={64} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">100% Quality Guarantee</h2>
                  <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                    We stand behind every product we sell. If you're not satisfied with the quality, we'll replace it or provide a full refund – no questions asked.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button 
                      size="lg"
                      onClick={() => window.location.href = '/contact'}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
                    >
                      Request Quality Samples
                    </Button>
                    <Button 
                      size="lg"
                      onClick={() => window.location.href = '/products'}
                      className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                    >
                      View Products
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Experience Quality You Can Trust
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our quality standards and get samples
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = 'tel:8875355666'}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
          >
            Call: 8875355666
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Quality;
