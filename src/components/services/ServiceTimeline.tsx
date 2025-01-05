import React from 'react';
import { motion } from 'framer-motion';

interface TimelineService {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceTimelineProps {
  services: TimelineService[];
}

const ServiceTimeline: React.FC<ServiceTimelineProps> = ({ services }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-white/5" />

      {/* Services */}
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="ml-12 mb-12 relative"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[52px] w-4 h-4 rounded-full bg-white/20 border-2 border-white" />
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceTimeline;