
import React from 'react';
import PeriodSelector from './PeriodSelector';
import { CothLogoMark, HamburgerIcon } from './Icons';
import type { Period } from '../types';

type ViewMode = 'yearly' | 'monthly';

interface HeaderProps {
  months: string[];
  selectedPeriod: Period;
  onPeriodChange: (newPeriod: Period) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const Header: React.FC<HeaderProps> = ({ months, selectedPeriod, onPeriodChange, viewMode, onViewModeChange }) => {
  const buttonBaseClasses = "px-8 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-gray-100 rounded-full";
  const activeClasses = "bg-primary text-white shadow-sm";
  const inactiveClasses = "text-gray-500 hover:text-gray-900";

  return (
    <header className="space-y-6">
      <div className="flex items-center gap-4">
        <CothLogoMark className="w-11 h-11 text-primary" />
        <span className="text-3xl font-bold text-gray-900 tracking-tight">COTH</span>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium text-gray-700 tracking-tight">
          Welcome back, here's <span className="font-bold text-gray-900">COTH 2024</span> performance snapshot.
        </h1>
        <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0">
            <HamburgerIcon />
        </button>
      </div>
      
      <div className="flex flex-wrap items-end gap-6">
        <div>
            <label className="block mb-2 text-sm text-gray-500">View</label>
            <div className="inline-flex rounded-full bg-gray-100 p-1" role="group">
                <button
                type="button"
                aria-pressed={viewMode === 'yearly'}
                className={`${buttonBaseClasses} ${viewMode === 'yearly' ? activeClasses : inactiveClasses}`}
                onClick={() => onViewModeChange('yearly')}
                >
                YEARLY
                </button>
                <button
                type="button"
                aria-pressed={viewMode === 'monthly'}
                className={`${buttonBaseClasses} ${viewMode === 'monthly' ? activeClasses : inactiveClasses}`}
                onClick={() => onViewModeChange('monthly')}
                >
                MONTHLY
                </button>
            </div>
        </div>
        
        {viewMode === 'monthly' && (
          <PeriodSelector 
            months={months} 
            selectedPeriod={selectedPeriod} 
            onPeriodChange={onPeriodChange} 
          />
        )}
      </div>
    </header>
  );
};

export default Header;
