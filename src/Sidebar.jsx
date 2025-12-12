import React from 'react';
// These icon names are placeholder names. They will not show up yet, 
// but we will add the library that provides them in the next step.
// We put them here so the code structure is correct.

const navItems = [
    { name: 'Digitization', icon: 'FileText', badge: null },
    { name: 'Indexing', icon: 'Hash', badge: 5 },
    { name: 'Unique Files', icon: 'Layers', badge: null },
    { name: 'Settings', icon: 'Settings', badge: null },
];

const Sidebar = () => {
    return (
        // Sidebar Container: Fixed width, full height, light background, white foreground.
        <div className="w-64 flex-shrink-0 h-full bg-white shadow-md flex flex-col justify-between p-6">
            
            {/* Top Section: Logo and Navigation */}
            <div>
                {/* Logo Section */}
                <div className="flex items-center space-x-2 pb-6 border-b border-gray-100">
                    {/* Placeholder for the 'Foresight' logo */}
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 111.955 0 0112 2c-2.355 0-4.63.7-6.504 2.016M2 12a10 10 0 1020 0 10 10 0 00-20 0z"></path></svg>
                    <span className="text-xl font-bold text-gray-800">Foresight</span>
                </div>

                {/* New Button */}
                <button className="flex items-center justify-center w-full mt-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow-lg transition duration-150">
                    <span className="text-xl mr-2">+</span>
                    New
                </button>

                {/* Navigation Links */}
                <nav className="mt-8 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            // Highlight 'Digitization' as active, like in the reference image
                            className={`flex items-center p-3 rounded-lg transition duration-150 ${
                                item.name === 'Digitization' 
                                    ? 'bg-indigo-100 text-indigo-700 font-semibold border-r-4 border-indigo-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {/* Icon Placeholder */}
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11v-2a2 2 0 012-2h2m4 0v.01"></path></svg>
                            
                            <span>{item.name}</span>
                            
                            {/* Badge */}
                            {item.badge && (
                                <span className="ml-auto bg-indigo-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Bottom Section: Used Space and Log out */}
            <div>
                {/* Used Space Card */}
                <div className="bg-gray-50 p-4 rounded-lg mt-8 text-sm">
                    <p className="font-semibold text-gray-700">Used space</p>
                    <p className="text-xs text-gray-500 mt-1">Last updated 12:01 pm June 15, 2021</p>
                    
                    {/* Progress Bar (71% like in the image) */}
                    <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>0%</span>
                            <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                            <div 
                                className="bg-indigo-500 h-1.5 rounded-full" 
                                style={{ width: '71%' }}
                            ></div>
                        </div>
                        <p className="text-right text-xs mt-1 font-medium text-gray-600">71%</p>
                    </div>
                </div>

                {/* Log out button */}
                <a href="#" className="flex items-center p-3 mt-4 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition duration-150">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4V4"></path></svg>
                    <span>Log out</span>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;