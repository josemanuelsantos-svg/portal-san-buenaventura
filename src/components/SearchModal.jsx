import React, { useState, useEffect, useRef } from 'react';
import IconRenderer from './IconHelper';
import { SCHOOL_APPS } from '../data/appsData';

export const SearchModal = ({ isOpen, onClose, onSelectApp }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filteredApps = SCHOOL_APPS.filter(app => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      app.title.toLowerCase().includes(q) ||
      app.shortDescription.toLowerCase().includes(q) ||
      app.category.toLowerCase().includes(q) ||
      app.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredApps.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredApps.length) % (filteredApps.length || 1));
    } else if (e.key === 'Enter' && filteredApps[selectedIndex]) {
      e.preventDefault();
      onSelectApp(filteredApps[selectedIndex]);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Search Bar Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <IconRenderer name="Search" className="w-5 h-5 text-indigo-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Buscar por aplicación, etiqueta o función (ej. Chromebooks, Comedor, Rúbrica)..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-sm md:text-base outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-500 hover:text-slate-300 px-2 py-1 rounded bg-slate-800"
            >
              Limpiar
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <IconRenderer name="X" className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredApps.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <IconRenderer name="Search" className="w-8 h-8 mx-auto text-slate-600 mb-2" />
              <p className="text-sm font-medium">No se encontraron aplicaciones con "{query}"</p>
              <p className="text-xs text-slate-500 mt-1">Prueba con palabras clave como 'IA', 'Menú', 'Portátil' o 'Libros'.</p>
            </div>
          ) : (
            filteredApps.map((app, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={app.id}
                  onClick={() => {
                    onSelectApp(app);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition ${
                    isSelected 
                      ? 'bg-indigo-600/20 border border-indigo-500/40 text-white' 
                      : 'hover:bg-slate-800/60 border border-transparent text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-md`}>
                      <IconRenderer name={app.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-100">{app.title}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${app.badgeColor}`}>
                          {app.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{app.shortDescription}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {app.isFavorite && (
                      <IconRenderer name="Star" className="w-4 h-4 text-amber-400 fill-amber-400" />
                    )}
                    <span className="text-xs text-indigo-400 font-medium hidden sm:inline">Abrir →</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-400">↑↓</kbd> Navegar</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-400">↵</kbd> Seleccionar</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-400">ESC</kbd> Cerrar</span>
          </div>
          <span className="text-indigo-400 font-medium">{filteredApps.length} aplicaciones disponibles</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
