
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SegmentData } from '../types';
import ChartContainer from './ChartContainer';

interface SegmentGrowthChartProps {
  data: SegmentData[];
}

export const SegmentGrowthChart: React.FC<SegmentGrowthChartProps> = ({ data }) => {
  return (
    <ChartContainer title="Customer Segment Growth (%)">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
          <XAxis type="number" stroke="#9ca3af" fontSize={12} tickFormatter={(value) => `${value}%`} />
          <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={60} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              borderColor: '#374151',
              color: '#e5e7eb'
            }}
            formatter={(value: number) => [`+${value}%`, 'Growth']}
            cursor={{ fill: 'rgba(45, 212, 191, 0.1)' }}
          />
          <Bar dataKey="growth" name="Growth Rate" fill="#2dd4bf" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
