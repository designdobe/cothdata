
import React, { useState, useMemo, useEffect } from 'react';
import { cothData } from './constants';
import Header from './components/Header';
import StatCard from './components/StatCard';
import { UserGrowthChart } from './components/UserGrowthChart';
import { RevenueChart } from './components/RevenueChart';
import { CostVsValueChart } from './components/CostVsValueChart';
import {
  UsersIcon,
  WonIcon,
  TrendingUpIcon,
  TargetIcon,
} from './components/Icons';
import type { Period, CothData } from './types';

type ViewMode = 'yearly' | 'monthly';

const App: React.FC = () => {
  const months = useMemo(() => cothData.map(d => d.month), []);
  const [period, setPeriod] = useState<Period>({ start: months[0], end: months[months.length - 1] });
  const [viewMode, setViewMode] = useState<ViewMode>('yearly');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = useMemo(() => {
    if (viewMode === 'yearly') return cothData;

    const startIndex = months.indexOf(period.start);
    const endIndex = months.indexOf(period.end);

    if (startIndex === -1 || endIndex === -1) {
      return cothData;
    }

    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);

    return cothData.slice(start, end + 1);
  }, [period, months, viewMode]);

  const calculateStats = (data: CothData[]) => {
    if (data.length === 0) {
      return { totalRevenue: 0, averageMau: 0, averageConversionRate: 0, averageLtv: 0 };
    }
    const totalRevenue = data.reduce((acc, item) => acc + item.monthlyRevenue, 0);
    const averageMau = data.reduce((acc, item) => acc + item.mau, 0) / data.length;
    const averageConversionRate = data.reduce((acc, item) => acc + item.conversionRate, 0) / data.length;
    const averageLtv = data.reduce((acc, item) => acc + item.ltv, 0) / data.length;
    return { totalRevenue, averageMau, averageConversionRate, averageLtv };
  };
  
  const currentStats = useMemo(() => calculateStats(filteredData), [filteredData]);

  const stats = useMemo(() => ([
    {
      title: "Total Revenue",
      value: `₩${Math.round(currentStats.totalRevenue * 1000000).toLocaleString()}`,
      icon: <WonIcon />,
      changeValue: "+11.2%",
      changeDescription: "vs Previous Year",
      variant: "primary" as const,
    },
    {
      title: "Average MAU",
      value: Math.round(currentStats.averageMau).toLocaleString(),
      icon: <UsersIcon />,
      changeValue: "+24.5%",
      changeDescription: "vs Previous Year",
    },
    {
      title: "Avg. Conversion",
      value: `${currentStats.averageConversionRate.toFixed(1)}%`,
      icon: <TrendingUpIcon />,
      changeValue: "+1.8%",
      changeDescription: "vs Previous Year",
    },
    {
      title: "Average LTV",
      value: Math.round(currentStats.averageLtv).toLocaleString(),
      icon: <TargetIcon />,
      changeValue: "+8.3%",
      changeDescription: "vs Previous Year",
    }
  ]), [currentStats]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header 
          months={months}
          selectedPeriod={period}
          onPeriodChange={setPeriod}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <main className="mt-8">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 group">
              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <StatCard
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    changeValue={stat.changeValue}
                    changeDescription={stat.changeDescription}
                    variant={stat.variant}
                  />
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 gap-8">
                <UserGrowthChart data={filteredData} />
                <RevenueChart data={filteredData} />
                <CostVsValueChart data={filteredData} />
            </div>
          </div>
        </main>
        <footer className="text-center py-6 text-gray-500 text-sm">
            design.dobe
        </footer>
      </div>
    </div>
  );
};

export default App;
