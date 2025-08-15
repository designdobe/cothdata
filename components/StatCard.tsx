
import React from 'react';
import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  changeValue?: string;
  changeDescription?: string;
  variant?: 'primary';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  changeValue, 
  changeDescription,
  variant,
}) => {
  const isPrimary = variant === 'primary';
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 group-hover:border-primary transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {changeValue && (
             <p className="text-sm text-gray-500 pt-1">
                <span className="font-semibold text-primary">{changeValue}</span> {changeDescription}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full transition-colors duration-300 ${isPrimary ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} group-hover:bg-primary group-hover:text-white`}>
            {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
