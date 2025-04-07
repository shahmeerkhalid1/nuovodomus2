import React from 'react';
import { cn } from '@/lib/utils';

const AboutDetailCard = ({ 
  title, 
  description, 
  icon, 
  isPrimary = false, 
}) => {
  
    const cardClasses = isPrimary 
    ? "flex-1 bg-primary rounded-lg shadow-md p-6 flex flex-col items-center text-center text-white" 
    : "flex-1 bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center";
  
  const iconBgClasses = isPrimary 
    ? "bg-white rounded-full p-4 mb-4" 
    : "bg-primary rounded-full p-4 mb-4";
  
  const iconClasses = isPrimary 
    ? "h-8 w-8 text-primary-foreground" 
    : "h-8 w-8 text-white";
  
  
  const textClasses = isPrimary ? "mb-6" : "text-primary-foreground mb-6";

  return (
    <div className={cardClasses}>
      <div className={iconBgClasses}>
        {icon && (
          <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        )}
      </div>
      <h5 className={cn(`${isPrimary ? 'text-white' : 'text-primary-foreground'} lg:text-[28px] sm:text-3xl text-2xl font-bold mt-4  mb-4 `)}>{title}</h5>
      <p className={`${textClasses}`}>
        {description}
      </p>

    </div>
  );
};


export default AboutDetailCard
