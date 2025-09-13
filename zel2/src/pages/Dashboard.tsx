import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import EventEarningsChart from '../components/EventEarningsChart';
import AttendanceCard from '../components/AttendanceCard';
import SummaryCard from '../components/summarycard';

export default function Dashboard() {
  const [selected, setSelected] = useState('dashboard');
  
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar selected={selected} onSelect={setSelected} />
      <main className="flex bg-gray-100 max-h-full">
        {selected === 'dashboard' && (
          <div className="w-full">
            {/* Top section with chart and side cards */}
            <div>
              <div >
                <EventEarningsChart/>
              </div>
              <div className="grid grid-cols-3 ">
              <SummaryCard title="Top events" items={['Samsung Exhibitions', 'Redbull Events']} />
              <SummaryCard title="Top contractors" items={['Four seasons', 'Balbaa catering']} />
              <AttendanceCard />
            </div>
            </div>
            
            {/* Bottom section with summary cards */}
            
          </div>
        )}
        
        {selected === 'home' && (
          <div className="w-full text-2xl text-gray-700 font-semibold">
            Welcome to the Home Page
          </div>
        )}
        
        {selected !== 'dashboard' && selected !== 'home' && (
          <div className="w-full text-gray-600 text-xl font-semibold">
            {selected} page content coming soon...
          </div>
        )}
      </main>
    </div>
  );
}