
import React from 'react';
import type { CothData } from '../types';

interface FullDataTableProps {
  data: CothData[];
}

export const FullDataTable: React.FC<FullDataTableProps> = ({ data }) => {
  const tableHeaders = ['Month', 'MAU', 'DAU', 'CAC', 'LTV', 'Conversion Rate (%)', 'Monthly Revenue (Million KRW)'];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
        <h3 className="text-lg font-semibold text-white p-6">Full Data Breakdown</h3>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700/50">
                <tr>
                    {tableHeaders.map((header) => (
                    <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        {header}
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                {data.map((row) => (
                    <tr key={row.month} className="hover:bg-gray-700/50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{row.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{row.mau.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{row.dau.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">₩{row.cac.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">₩{row.ltv.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{row.conversionRate.toFixed(1)}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">₩{row.monthlyRevenue.toLocaleString()}M</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};
