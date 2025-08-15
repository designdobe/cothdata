import React from 'react';
import type { Period } from '../types';

interface PeriodSelectorProps {
  months: string[];
  selectedPeriod: Period;
  onPeriodChange: (newPeriod: Period) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ months, selectedPeriod, onPeriodChange }) => {
  const handleStartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPeriodChange({ ...selectedPeriod, start: e.target.value });
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPeriodChange({ ...selectedPeriod, end: e.target.value });
  };

  const commonSelectClasses = "bg-gray-100 border border-gray-200 text-gray-700 font-medium text-sm rounded-full focus:ring-primary focus:border-primary block w-full pl-5 pr-10 py-3 transition-colors duration-200 appearance-none hover:border-primary focus:outline-none focus:ring-1";

  return (
    <div className="flex items-end gap-4 w-full sm:w-auto">
        <div className="flex-1">
            <label htmlFor="start-month" className="block mb-2 text-sm text-gray-500">Start month</label>
            <div className="relative group">
                <select id="start-month" value={selectedPeriod.start} onChange={handleStartChange} className={commonSelectClasses}>
                    {months.map(month => (
                        <option key={`start-${month}`} value={month}>{month}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="flex-1">
            <label htmlFor="end-month" className="block mb-2 text-sm text-gray-500">End month</label>
            <div className="relative group">
                <select id="end-month" value={selectedPeriod.end} onChange={handleEndChange} className={commonSelectClasses}>
                     {months.map(month => (
                        <option key={`end-${month}`} value={month}>{month}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PeriodSelector;