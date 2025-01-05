import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: Service[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, description, services }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="mb-12">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left bg-gray-900/50 p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4 text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCategory;