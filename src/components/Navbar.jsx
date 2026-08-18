import React, { useState } from 'react';
import IconRenderer from './IconHelper';
import { TEACHER_ROLES } from '../data/appsData';

export const Navbar = ({ 
  onOpenSearch, 
  activeRole, 
  onRoleChange, 
  theme, 
  onToggleTheme,
  onOpenAppGrid
}) => {
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const selectedRoleObj = TEACHER_ROLES.find(r => r.id === activeRole) || TEACHER_ROLES[0];

  return (
    <header className="sticky top-0 z-30 glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-indigo-500/30 text-indigo-400 font-bold text-lg shadow-inner">
              <IconRenderer name="Grid" className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-lg lg:text-xl tracking-tight text-white flex items-center gap-2">
                PORTAL <span className="gradient-text font-black">DOCENTE</span>
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                Hub Escolar
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Eje de Gestión Colegial & Aplicaciones</p>
          </div>
        </div>

        {/* Universal Search Bar Trigger */}
        <div className="flex-1 max-w-xl hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-4 py-2 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 hover:border-indigo-500/50 rounded-xl text-slate-400 text-sm transition-all shadow-inner group"
          >
            <div className="flex items-center gap-2.5">
              <IconRenderer name="Search" className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              <span>Buscar aplicación, módulo o tarea (ej. <i>portátiles, menú, IA...</i>)</span>
            </div>
            <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-semibold text-slate-400 bg-slate-800 border border-slate-700 rounded-md">
              <span className="text-xs">⌘</span> K
            </kbd>
          </button>
        </div>

        {/* Controls & User Profile */}
        <div className="flex items-center gap-2 lg:gap-3">
          
          {/* Mobile Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 md:hidden text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/60 rounded-xl hover:bg-slate-700 transition"
            title="Buscar apps"
          >
            <IconRenderer name="Search" className="w-5 h-5" />
          </button>

          {/* Role Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/90 border border-slate-700/80 hover:border-indigo-500/50 rounded-xl text-xs font-medium text-slate-200 hover:text-white transition shadow-sm"
            >
              <IconRenderer name="SlidersHorizontal" className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline text-slate-400">Rol:</span>
              <span className="font-semibold text-indigo-300">{selectedRoleObj.name}</span>
              <IconRenderer name="ChevronRight" className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showRoleDropdown ? 'rotate-90' : ''}`} />
            </button>

            {showRoleDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-slate-900/95 border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-xl py-1 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase text-slate-400 border-b border-slate-800">
                  Filtrar por perfil docente
                </div>
                {TEACHER_ROLES.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => {
                      onRoleChange(role.id);
                      setShowRoleDropdown(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition ${
                      activeRole === role.id 
                        ? 'bg-indigo-600/20 text-indigo-300 font-semibold border-l-2 border-indigo-500' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{role.name}</span>
                    {activeRole === role.id && <IconRenderer name="Check" className="w-3.5 h-3.5 text-indigo-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Apps Drawer Launch Button */}
          <button
            onClick={onOpenAppGrid}
            className="p-2.5 text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 transition group"
            title="Lanzador rápido de Aplicaciones"
          >
            <IconRenderer name="Grid" className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
          </button>

          {/* Teacher Avatar & Profile */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-xs text-white">
                  JM
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full" title="En línea"></span>
            </div>
            <div className="hidden xl:block text-left">
              <div className="text-xs font-bold text-white leading-tight">Prof. José Manuel</div>
              <div className="text-[10px] text-slate-400">Colegio San Buenaventura</div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
