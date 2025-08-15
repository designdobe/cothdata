
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { CothData } from '../types';
import ChartContainer from './ChartContainer';

interface ConversionRateChartProps {
  data: CothData[];
}

export const ConversionRateChart: React.FC<ConversionRateChartProps> = ({ data }) => {
  return (
    <ChartContainer title="Conversion Rate (%)">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <defs>
            <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(value) => `${value}%`} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              borderColor: '#374151',
              color: '#e5e7eb'
            }}
            formatter={(value: number) => [`${value}%`, 'Conversion Rate']}
            cursor={{ fill: 'rgba(20, 184, 166, 0.1)' }}
          />
          <Area type="monotone" dataKey="conversionRate" stroke="#14b8a6" fillOpacity={1} fill="url(#colorConversion)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
