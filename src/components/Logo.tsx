import React from 'react';
import logo from '../../Primary.png';
import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="BrandBoost Logo" className="w-40 h-10 " />
    </div>
  );
};

export default Logo;
