import React, { useState } from 'react';
import IconRenderer from './IconHelper';

export const AppViewerModal = ({ app, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!app) return null;

  // Choose preview or app url
  const targetUrl = app.previewHtml 
    ? `file://${app.previewHtml}` 
    : (app.localPath ? `file://${app.localPath}` : app.url);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`w-full bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 overflow-hidden ${
        isFullscreen ? 'h-full max-w-full rounded-none' : 'max-w-6xl h-[88vh]'
      }`}>
        
        {/* Modal Topbar Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
          
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow`}>
              <IconRenderer name={app.icon} className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-100 text-sm md:text-base">{app.title}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${app.badgeColor}`}>
                  {app.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">{app.shortDescription}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              title={isFullscreen ? "Restaurar tamaño" : "Pantalla completa"}
            >
              <IconRenderer name="Maximize2" className="w-4 h-4" />
            </button>

            <a
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-semibold transition"
            >
              <IconRenderer name="ExternalLink" className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nueva Pestaña</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              title="Cerrar modal"
            >
              <IconRenderer name="X" className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Modal Iframe Body */}
        <div className="flex-1 bg-slate-950 relative">
          <iframe
            src={targetUrl}
            title={app.title}
            className="w-full h-full border-0 bg-slate-900"
            sandbox="allow-same-origin allow-scripts font-src img-src"
          />
        </div>

        {/* Footer status bar */}
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Acceso activo desde el Portal Central Escolar</span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">ID: {app.id}</span>
        </div>

      </div>
    </div>
  );
};

export default AppViewerModal;
