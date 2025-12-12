import React from 'react';

const DashboardContent = () => {
  return (
    <div className="flex-1 overflow-auto p-8 bg-gray-50 h-screen">
      
      {/* --- TOP HEADER --- */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            Hello Bharath
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">Premium</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">» June 15</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
            <input 
                type="text" 
                placeholder="Search" 
                className="bg-gray-800 text-gray-200 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
            />
            {/* Search Icon (SVG) */}
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* --- DIGITIZATION SECTION --- */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Digitization
            <svg className="w-5 h-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        </h2>
        <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Filter by</span>
            <select className="border-gray-300 border rounded-md p-1 text-sm bg-white text-gray-700 outline-none">
                <option>This year</option>
                <option>This month</option>
            </select>
        </div>
      </div>

      {/* --- BLUE STATS ROW --- */}
      <div className="bg-blue-500 rounded-2xl p-6 text-white flex justify-between shadow-lg mb-8 divide-x divide-blue-400">
        <StatBox title="Received Files" value="87" sub="Total Number Of Files" />
        <StatBox title="Received Files" value="57" sub="Total Number Per Source" />
        <StatBox title="Total Number" value="87" sub="Digitized Files To Date" />
        <StatBox title="Total Number" value="120" sub="Digitized Files By Sprint" />
        <StatBox title="Average Number" value="123" sub="Digitized Files Per Sprint" />
      </div>

      {/* --- BOTTOM GRID: FILES & CHART --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Recent Files */}
        <div className="lg:col-span-1">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">Recent Files</h3>
                <span className="text-gray-400 cursor-pointer">→</span>
            </div>
            
            <div className="space-y-4">
                <FileItem name="Marcus Family.jpg" date="10 June, 11:23 am" size="12 MB" color="bg-blue-100 text-blue-500" />
                <FileItem name="Work.doc" date="10 June, 11:23 am" size="4 MB" color="bg-indigo-100 text-indigo-500" />
                <FileItem name="Final Design.fig" date="10 June, 11:23 am" size="94 MB" color="bg-purple-100 text-purple-500" />
                <FileItem name="My image.jpg" date="10 June, 11:23 am" size="12 MB" color="bg-blue-100 text-blue-500" />
                <FileItem name="Final Logo.svg" date="10 June, 11:23 am" size="12 MB" color="bg-orange-100 text-orange-500" />
            </div>
        </div>

        {/* Right Col: Activity Chart */}
        <div className="lg:col-span-2">
             <h3 className="font-bold text-lg text-gray-800 mb-6">Activity Chart</h3>
             
             {/* Simple CSS Bar Chart Simulation */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 h-64 flex items-end justify-between px-10 relative">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-10 pointer-events-none">
                    <div className="border-t border-gray-400 w-full"></div>
                    <div className="border-t border-gray-400 w-full"></div>
                    <div className="border-t border-gray-400 w-full"></div>
                    <div className="border-t border-gray-400 w-full"></div>
                    <div className="border-t border-gray-400 w-full"></div>
                </div>

                {/* Bars */}
                {/* Group 1 */}
                <div className="flex gap-2 items-end z-10">
                    <div className="w-6 bg-indigo-900 rounded-t-md h-16"></div>
                    <div className="w-6 bg-blue-500 rounded-t-md h-40"></div>
                </div>
                {/* Group 2 */}
                <div className="flex gap-2 items-end z-10">
                     <div className="w-6 bg-indigo-900 rounded-t-md h-24"></div>
                     <div className="w-6 bg-blue-500 rounded-t-md h-56"></div>
                </div>
                {/* Group 3 */}
                <div className="flex gap-2 items-end z-10">
                     <div className="w-6 bg-indigo-900 rounded-t-md h-32"></div>
                     <div className="w-6 bg-blue-500 rounded-t-md h-48"></div>
                </div>
                 {/* Group 4 */}
                 <div className="flex gap-2 items-end z-10">
                     <div className="w-6 bg-indigo-900 rounded-t-md h-20"></div>
                     <div className="w-6 bg-blue-500 rounded-t-md h-36"></div>
                </div>
             </div>

             {/* Legend */}
             <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span> Media
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span> Photos
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-3 h-3 rounded-full bg-indigo-900"></span> Docs
                </div>
             </div>
        </div>

      </div>

    </div>
  );
};

// Helper Component for Stats (Mini-cards inside the blue box)
const StatBox = ({ title, value, sub }) => (
    <div className="flex-1 px-4 text-center first:pl-0 last:pr-0">
        <p className="text-xs text-blue-100 opacity-80 mb-1">{title}</p>
        <p className="text-3xl font-bold mb-1">{value}</p>
        <p className="text-[10px] text-blue-200">{sub}</p>
    </div>
);

// Helper Component for File List Items
const FileItem = ({ name, date, size, color }) => (
    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition">
        <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-700">{name}</p>
                <p className="text-xs text-gray-400">{date}</p>
            </div>
        </div>
        <span className="text-xs font-medium text-gray-500">{size}</span>
    </div>
);

export default DashboardContent; 