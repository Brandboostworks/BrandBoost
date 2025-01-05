import React from 'react';
import {
  Briefcase, Megaphone, Share2, Search, PenTool, Palette,
  Globe, Mail, Users, Video, MapPin, Lightbulb, Newspaper
} from 'lucide-react';
import ServiceTimeline from './ServiceTimeline';

const ServicesSection = () => {
  const localBusinessServices = [
    {
      icon: <MapPin size={32} className="text-white" />,
      title: "Local Marketing Strategies",
      description: "Custom-built marketing plans that connect your business with your local community"
    },
    {
      icon: <Briefcase size={32} className="text-white" />,
      title: "Brand Strategy and Development",
      description: "Create a strong, memorable brand that resonates with your local audience"
    },
    {
      icon: <Newspaper size={32} className="text-white" />,
      title: "Print and Outdoor Advertising",
      description: "Strategic placement of traditional advertising to reach your local market"
    },
    {
      icon: <Lightbulb size={32} className="text-white" />,
      title: "Creative Advertising Campaigns",
      description: "Eye-catching campaigns that capture attention and drive local engagement"
    }
  ];

  const digitalServices = [
    {
      icon: <Megaphone size={32} className="text-white" />,
      title: "Digital Marketing",
      description: "Results-driven digital campaigns across multiple platforms"
    },
    {
      icon: <Share2 size={32} className="text-white" />,
      title: "Social Media Management",
      description: "Strategic social media presence to engage and grow your audience"
    },
    {
      icon: <Search size={32} className="text-white" />,
      title: "Search Engine Optimization (SEO)",
      description: "Improve your visibility in search results and attract more customers"
    },
    {
      icon: <PenTool size={32} className="text-white" />,
      title: "Content Creation",
      description: "Compelling content that tells your story and connects with your audience"
    },
    {
      icon: <Globe size={32} className="text-white" />,
      title: "Web Development",
      description: "Custom websites that showcase your business and drive results"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to your business needs, 
            from local strategies to full-scale digital campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Local Business Solutions</h3>
            <ServiceTimeline services={localBusinessServices} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">Digital & Creative Services</h3>
            <ServiceTimeline services={digitalServices} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;