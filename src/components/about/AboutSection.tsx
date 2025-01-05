import React from 'react';
import AboutStory from './AboutStory';
import TeamSection from './TeamSection';
import VisionMission from './VisionMission';
import WhyChooseUs from './WhyChooseUs';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
        <div className="max-w-4xl mx-auto space-y-20">
          <AboutStory />
          <TeamSection />
          <VisionMission />
          <WhyChooseUs />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;