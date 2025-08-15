
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { CothData } from '../types';
import ChartContainer from './ChartContainer';

interface CostVsValueChartProps {
  data: CothData[];
}

export const CostVsValueChart: React.FC<CostVsValueChartProps> = ({ data }) => {
  return (
    <ChartContainer title="CAC vs. LTV">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#718096" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#718096" fontSize={12} tickFormatter={(value) => `${(value/1000)}k`} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              borderColor: '#e2e8f0',
              color: '#1a202c',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number) => [`₩${value.toLocaleString()}`]}
            cursor={{ fill: 'rgba(0, 210, 131, 0.1)' }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{fontSize: "14px", top: "-28px", right: "0px"}}/>
          <Bar dataKey="cac" name="CAC" fill="#00D283" radius={[4, 4, 0, 0]} />
          <Bar dataKey="ltv" name="LTV" fill="#E2E8F0" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
