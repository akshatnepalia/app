import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { companyInfo } from '../mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
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
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'd like to enquire about your products and bulk pricing.");
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: companyInfo.phone,
      action: `tel:${companyInfo.phone}`,
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: companyInfo.whatsapp,
      action: `https://wa.me/${companyInfo.whatsapp}`,
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: companyInfo.email,
      action: `mailto:${companyInfo.email}`,
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have a question or need a bulk quote? We're here to help you find the perfect solution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-200">
                <CardContent className="p-6 text-center">
                  <a 
                    href={method.action}
                    onClick={method.title === "WhatsApp" ? (e) => { e.preventDefault(); handleWhatsAppClick(); } : undefined}
                    className="block"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <method.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                    <p className="text-slate-600 break-all">{method.info}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold shadow-lg"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} className="text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                        <p className="text-slate-600 leading-relaxed">{companyInfo.address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone size={24} className="text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
                        <a href={`tel:${companyInfo.phone}`} className="text-slate-600 hover:text-orange-600 transition-colors">
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail size={24} className="text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
                        <a href={`mailto:${companyInfo.email}`} className="text-slate-600 hover:text-orange-600 transition-colors break-all">
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={24} className="text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                        <p className="text-slate-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-slate-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-200">✓</span>
                      <span>Get instant bulk pricing quotes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-200">✓</span>
                      <span>Free product samples available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-200">✓</span>
                      <span>Dedicated support for large orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-200">✓</span>
                      <span>Custom packaging solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-200">✓</span>
                      <span>24-hour response guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden shadow-lg">
                <div className="h-64 bg-slate-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.097948!2d75.8397!3d26.8967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c000000001%3A0x0!2sJawahar%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                    className="grayscale hover:grayscale-0 transition-all"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer to Talk Directly?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Give us a call or WhatsApp us for immediate assistance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = `tel:${companyInfo.phone}`}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
            >
              <Phone className="mr-2" size={20} />
              Call Now: {companyInfo.phone}
            </Button>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
