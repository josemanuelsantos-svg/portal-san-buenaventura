import React from 'react';
import IconRenderer from './IconHelper';
import { GENERAL_METRICS } from '../data/statsData';

export const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {GENERAL_METRICS.map((metric) => (
        <div 
          key={metric.id}
          className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 transition shadow-lg relative overflow-hidden group"
        >
          {/* Subtle bg glow */}
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all"></div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{metric.title}</span>
            <div className={`p-2 rounded-xl bg-gradient-to-br ${metric.color}`}>
              <IconRenderer name={metric.icon} className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-xl lg:text-2xl font-extrabold text-white tracking-tight">{metric.value}</span>
            <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded ${
              metric.status === 'positive' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
            }`}>
              {metric.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
