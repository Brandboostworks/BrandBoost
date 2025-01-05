import React from 'react';
import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-black/50 p-8 rounded-lg">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6" />
          <h3 className="text-2xl font-bold">Vision</h3>
        </div>
        <p className="text-gray-400">
          To empower every local business to thrive with smart marketing solutions and foster 
          strong connections with their communities.
        </p>
      </div>
      <div className="bg-black/50 p-8 rounded-lg">
        <div className="flex items-center gap-3 mb-6">
          <Compass className="w-6 h-6" />
          <h3 className="text-2xl font-bold">Mission</h3>
        </div>
        <p className="text-gray-400">
          To provide affordable, personalized, and impactful branding, advertising, and promotional 
          services that cater specifically to the needs of small businesses in towns like Siddipet.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;