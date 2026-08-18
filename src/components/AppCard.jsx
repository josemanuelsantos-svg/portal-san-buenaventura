import React from 'react';
import IconRenderer from './IconHelper';

export const AppCard = ({ app, onToggleFavorite, onLaunchModal, onLaunchExternal }) => {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between relative group hover:border-indigo-500/50 transition-all duration-300">
      
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          
          {/* Icon & Category */}
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-full bg-slate-950/40 rounded-[14px] flex items-center justify-center text-white backdrop-blur-sm">
                <IconRenderer name={app.icon} className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${app.badgeColor}`}>
                {app.category}
              </span>
              <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition-colors mt-1">
                {app.title}
              </h3>
            </div>
          </div>

          {/* Favorite Star Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(app.id);
            }}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition"
            title={app.isFavorite ? "Quitar de favoritos" : "Marcar como favorita"}
          >
            <IconRenderer 
              name="Star" 
              className={`w-5 h-5 ${app.isFavorite ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}`} 
            />
          </button>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {app.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {app.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-800/80 text-slate-400 rounded-md border border-slate-700/50">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Info & Action Buttons */}
      <div className="pt-3 border-t border-slate-800/80">
        
        {/* Status Indicator & Live Stat */}
        <div className="flex items-center justify-between text-xs mb-3 text-slate-400">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${app.status === 'active' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
            <span className="text-[11px] truncate max-w-[150px]">{app.statusText}</span>
          </div>

          {app.stats && (
            <span className="font-semibold text-slate-200 bg-slate-800/60 px-2 py-0.5 rounded text-[11px] border border-slate-700/40">
              {app.stats.value}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLaunchModal(app)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-xs transition shadow-md shadow-indigo-600/20 active:scale-95"
          >
            <IconRenderer name="Maximize2" className="w-3.5 h-3.5" />
            <span>Abrir en Portal</span>
          </button>
          
          <button
            onClick={() => onLaunchExternal(app)}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 transition"
            title="Abrir en pestaña independiente"
          >
            <IconRenderer name="ExternalLink" className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default AppCard;
