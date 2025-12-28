
import React from 'react';
import { ToolDefinition } from '../types';
import { ArrowUpRight, Star } from 'lucide-react';

interface ToolCardProps {
  tool: ToolDefinition;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 hover:bg-slate-800/50 transition-all cursor-pointer shadow-sm hover:shadow-sky-500/5"
    >
      {tool.isPopular && (
        <div className="absolute top-4 right-4 text-amber-400">
          <Star size={18} fill="currentColor" />
        </div>
      )}
      
      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
        {tool.icon}
      </div>
      
      <h3 className="font-bold text-lg mb-1 group-hover:text-sky-400 transition-colors">{tool.name}</h3>
      <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-4">
        {tool.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-800 px-2 py-0.5 rounded">
          {tool.category.split(' ')[0]}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
