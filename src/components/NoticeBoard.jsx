import React from 'react';
import IconRenderer from './IconHelper';
import { SCHOOL_NOTICES } from '../data/statsData';

export const NoticeBoard = () => {
  return (
    <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <IconRenderer name="Bell" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-base text-white">Tablón de Avisos y Comunicados</h2>
            <p className="text-xs text-slate-400">Novedades y avisos de la dirección escolar</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
          3 Avisos activos
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SCHOOL_NOTICES.map((notice) => (
          <div 
            key={notice.id}
            className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-xl p-4 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-amber-400 text-[11px] uppercase tracking-wider">{notice.category}</span>
                <span className="text-[10px] text-slate-500">{notice.date}</span>
              </div>
              <h3 className="font-semibold text-sm text-slate-100 mb-1 leading-snug">{notice.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{notice.content}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 italic">Por: {notice.author}</span>
              <span className="text-indigo-400 font-medium hover:underline cursor-pointer">Ver detalle →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
