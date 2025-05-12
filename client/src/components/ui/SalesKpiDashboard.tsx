import React from "react";

export function SalesKpiDashboard() {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
      <div className="text-sm font-bold text-gray-800 mb-2">Sales Performance Dashboard</div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-blue-50 p-2 rounded-md border border-blue-200">
          <div className="text-xs text-blue-700">Revenue</div>
          <div className="text-sm font-bold text-blue-800">$1.2M</div>
          <div className="text-xs text-green-600">↑ 18%</div>
        </div>
        <div className="bg-green-50 p-2 rounded-md border border-green-200">
          <div className="text-xs text-green-700">Conversion</div>
          <div className="text-sm font-bold text-green-800">24.8%</div>
          <div className="text-xs text-green-600">↑ 5.2%</div>
        </div>
        <div className="bg-purple-50 p-2 rounded-md border border-purple-200">
          <div className="text-xs text-purple-700">CAC</div>
          <div className="text-sm font-bold text-purple-800">$185</div>
          <div className="text-xs text-green-600">↓ 18%</div>
        </div>
      </div>
      
      {/* Bar Graph */}
      <div className="mb-2">
        <div className="text-xs text-gray-600 mb-1">Quarterly Performance vs Target</div>
        <div className="flex items-end h-20 space-x-1">
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-5 rounded-t h-12"></div>
            <div className="text-xs mt-1">Q1</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 w-5 rounded-t h-14"></div>
            <div className="text-xs mt-1">Q2</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 w-5 rounded-t h-20"></div>
            <div className="text-xs mt-1">Q3</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 w-5 rounded-t h-16"></div>
            <div className="text-xs mt-1">Q4</div>
          </div>
          <div className="flex flex-col items-center ml-3">
            <div className="bg-gray-300 w-5 rounded-t h-10"></div>
            <div className="text-xs mt-1">Q1</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-400 w-5 rounded-t h-12"></div>
            <div className="text-xs mt-1">Q2</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-500 w-5 rounded-t h-11"></div>
            <div className="text-xs mt-1">Q3</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-600 w-5 rounded-t h-14"></div>
            <div className="text-xs mt-1">Q4</div>
          </div>
        </div>
        <div className="flex text-xs justify-between mt-1">
          <div className="font-semibold text-blue-600">FY2023-24</div>
          <div className="font-semibold text-gray-600">FY2024-25</div>
        </div>
      </div>
      
      {/* Legend/Note */}
      <div className="text-xs text-gray-600 mt-2 border-t border-gray-100 pt-2">
        Your quarterly targets were exceeded by 12% on average, with particularly strong performance in Q3 2024 (27% above target). 
      </div>
    </div>
  );
}