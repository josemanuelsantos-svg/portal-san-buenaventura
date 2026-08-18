import React from 'react';
import IconRenderer from './IconHelper';
import { SCHOOL_APPS } from '../data/appsData';

export const AppGridDrawer = ({ isOpen, onClose, onSelectApp }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden mt-14 mr-4 animate-in slide-in-from-top-4 duration-200">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2">
            <IconRenderer name="Grid" className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white text-sm">Lanzador Rápido de Aplicaciones</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <IconRenderer name="X" className="w-4 h-4" />
          </button>
        </div>

        {/* 3x3 App Grid */}
        <div className="p-4 grid grid-cols-3 gap-3 max-h-[70vh] overflow-y-auto">
          {SCHOOL_APPS.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                onSelectApp(app);
                onClose();
              }}
              className="flex flex-col items-center p-3 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-indigo-500/30 transition group text-center"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform mb-2`}>
                <IconRenderer name={app.icon} className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-indigo-300">
                {app.title}
              </span>
              <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                {app.category}
              </span>
            </button>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 text-center">
          <span className="text-[11px] text-slate-400">Acceso institucional verificado · San Buenaventura</span>
        </div>

      </div>
    </div>
  );
};

export default AppGridDrawer;
