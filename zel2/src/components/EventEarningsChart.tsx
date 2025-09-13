import React from 'react';
import { Search, Bell, ChevronDown, TrendingUp } from 'lucide-react';

const EventEarningsChart = () => {
  // Sample data for the earnings chart
  const earningsData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 30 },
    { month: 'Mar', value: 60 },
    { month: 'Apr', value: 45 },
    { month: 'May', value: 70 },
    { month: 'Jun', value: 65 },
    { month: 'Jul', value: 80 }
  ];

  const maxValue = Math.max(...earningsData.map(d => d.value));

  return (
    <div className="max-h-screen mb-8">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="h-5 w-5" />
            </button>
            
            {/* User Menu */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <span className="text-gray-700 font-medium">Admin</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Date */}
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-500">Show: Today, 3 June 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6  space-y-2">
        <div className="grid grid-cols-4 lg:grid-cols-3 gap-6">
          
          {/* Event Earnings Chart */}
          <div className='flex flex-col'>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border w-full border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Event earnings</h2>
              <select className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            
            <div className="mb-4">
              <div className="text-2xl font-bold text-gray-900">823.76 L.E</div>
              <div className="text-sm text-gray-500">+ 679.90 L.E</div>
            </div>
            
            {/* Line Chart */}
            <div className="h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((line) => (
                  <line
                    key={line}
                    x1="40"
                    y1={40 + line * 30}
                    x2="360"
                    y2={40 + line * 30}
                    stroke="#f3f4f6"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Y-axis labels */}
                {[100, 80, 60, 40, 20].map((value, index) => (
                  <text
                    key={value}
                    x="30"
                    y={45 + index * 30}
                    className="text-xs fill-gray-400"
                    textAnchor="end"
                  >
                    {value}
                  </text>
                ))}
                
                {/* Line path */}
                <path
                  d={`M 60,${160 - earningsData[0].value * 1.5} 
                      L 110,${160 - earningsData[1].value * 1.5} 
                      L 160,${160 - earningsData[2].value * 1.5} 
                      L 210,${160 - earningsData[3].value * 1.5} 
                      L 260,${160 - earningsData[4].value * 1.5} 
                      L 310,${160 - earningsData[5].value * 1.5} 
                      L 360,${160 - earningsData[6].value * 1.5}`}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Data points */}
                {earningsData.map((point, index) => (
                  <g key={index}>
                    <circle
                      cx={60 + index * 50}
                      cy={160 - point.value * 1.5}
                      r="4"
                      fill="#3b82f6"
                    />
                    {index === 4 && (
                      <>
                        <rect
                          x={60 + index * 50 - 20}
                          y={160 - point.value * 1.5 - 25}
                          width="40"
                          height="18"
                          fill="#374151"
                          rx="4"
                        />
                        <text
                          x={60 + index * 50}
                          y={160 - point.value * 1.5 - 12}
                          className="text-xs fill-white"
                          textAnchor="middle"
                        >
                          {point.value}K L.E
                        </text>
                      </>
                    )}
                  </g>
                ))}
                
                {/* X-axis labels */}
                {earningsData.map((point, index) => (
                  <text
                    key={index}
                    x={60 + index * 50}
                    y="185"
                    className="text-xs fill-gray-400"
                    textAnchor="middle"
                  >
                    {point.month}
                  </text>
                ))}
              </svg>
            </div>
          </div>
          </div>      
          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Event Completion Rates */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Event completion rates</h3>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              
              {/* Circular Progress */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.72)}`}
                      className="text-blue-600"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">72%</span>
                  </div>
                </div>
              </div>
              
              <div className="w-3 h-3 bg-orange-400 rounded-full mx-auto"></div>
            </div>

            {/* Events ROI */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <h3 className="text-sm font-medium text-gray-600">Events ROI</h3>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">+20%</span>
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-3">9050.92 L.E</div>
              
              {/* Mini trend chart */}
              <div className="h-8 flex items-end space-x-1">
                {[3, 5, 4, 6, 8, 7, 9, 8, 10].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-green-400 rounded-sm"
                    style={{ height: `${height * 3}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventEarningsChart;