/* src/components/Sidebar.tsx */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'clients', label: 'clients' },
  { id: 'contractors', label: 'contractors' },
  { id: 'events', label: 'events' },
];

type SidebarProps = {
  onSelect: (id: string) => void;
  selected: string;
};

export default function Sidebar({ onSelect, selected }: SidebarProps) {
  const navigate = useNavigate();
  return (
    <div className="w-64 h-screen bg-[#222359] text-white p-4 space-y-4">
      <img src='../../src/assets/s_logo.png' alt='My App' />
      <button
        onClick={() => navigate('/home')}
        className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 transition ${
          selected === 'home' ? 'bg-gray-700' : ''
        }`}
      >
        Home
      </button>
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 transition ${
            selected === item.id ? 'bg-gray-700' : ''
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}