import React from 'react';
import { MapPin, PiggyBank, Target, HandHeart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Local Expertise',
      description: 'We live and breathe small-town culture, making us uniquely equipped to connect your business with the local audience.'
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: 'Affordable Solutions',
      description: 'We understand budget constraints, which is why we offer services tailored to your needs without breaking the bank.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Tailored Strategies',
      description: 'Every business is different, and we create customized marketing plans designed to address your unique challenges and goals.'
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: 'Hands-On Support',
      description: 'We are with you every step of the way, from brainstorming ideas to executing campaigns and measuring success.'
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold mb-8">Why Choose Us?</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((reason) => (
          <div key={reason.title} className="bg-black/50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              {reason.icon}
              <h4 className="text-xl font-semibold">{reason.title}</h4>
            </div>
            <p className="text-gray-400">{reason.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-center italic mt-8">
        At BrandBoost, your success is our success. Let us help you make a mark in your community and beyond.
      </p>
    </div>
  );
};

export default WhyChooseUs;