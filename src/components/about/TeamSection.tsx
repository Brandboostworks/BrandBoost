import React from 'react';
import { Users } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Himavarshith Reddy',
      role: 'Visionary Strategist',
      description: 'With a knack for connecting with people and crafting personalized marketing plans.'
    },
    {
      name: 'Vinay',
      role: 'Creative Director',
      description: 'The creative powerhouse who transforms ideas into visually stunning campaigns that resonate with audiences.'
    },
    {
      name: 'Sushmanth',
      role: 'Operations Expert',
      description: 'Ensures every project runs smoothly and delivers on time with measurable results.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-8 h-8" />
        <h3 className="text-2xl font-bold">Our Team</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-black/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
            <p className="text-gray-400 text-sm mb-3">{member.role}</p>
            <p className="text-gray-500">{member.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-center mt-8">
        Together, we bring a perfect balance of innovation and execution, ensuring that your business 
        not only grows but also becomes a beloved part of your community.
      </p>
    </div>
  );
};

export default TeamSection;