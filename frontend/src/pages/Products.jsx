import React, { useState } from 'react';
import { Search, Filter, ArrowRight, CheckCircle2, Package } from 'lucide-react';
import { products } from '../mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEnquiry = (productName) => {
    const message = encodeURIComponent(`Hi, I'm interested in bulk orders for ${productName}. Please share pricing details.`);
    window.open(`https://wa.me/8875355666?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Range</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Premium quality medical, hygiene, and cleaning products for bulk buyers across India
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter size={20} className="text-slate-600 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Package size={64} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-slate-600">
                  Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-slate-100 hover:border-orange-200">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                      <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Available Sizes */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-700 mb-2">Available Sizes:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4 space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Target Market */}
                      <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                        <p className="text-xs font-semibold text-slate-700 mb-1">Perfect For:</p>
                        <p className="text-sm text-slate-600">{product.targetMarket}</p>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                        onClick={() => handleEnquiry(product.name)}
                      >
                        Get Bulk Quote
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Bulk Orders?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us for special pricing on large volume orders and customized packaging solutions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = 'tel:8875355666'}
              className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg"
            >
              Call: 8875355666
            </Button>
            <Button 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
