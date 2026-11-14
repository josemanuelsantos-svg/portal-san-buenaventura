import React from 'react';

/**
 * Captura errores de renderizado en componentes hijos para evitar pantallas en blanco
 * y ofrecer una recuperación segura sin perder el resto del portal.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof this.props.onReset === 'function') {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      const compact = Boolean(this.props.compact);
      return (
        <div
          className={`${
            compact ? 'p-4 rounded-2xl' : 'min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950'
          }`}
          role="alert"
        >
          <div className="w-full max-w-md mx-auto p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800/70 shadow-lg space-y-3 text-center">
            <div className="text-3xl">⚠️</div>
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              {this.props.title || 'Algo no se pudo mostrar correctamente'}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {this.props.description ||
                'Se ha producido un fallo puntual al cargar este bloque. El resto del portal sigue operativo.'}
            </p>
            {this.state.error?.message && (
              <p className="text-[11px] font-mono text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1.5 rounded-lg break-words">
                {this.state.error.message}
              </p>
            )}
            <div className="flex items-center justify-center gap-2 pt-1">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition cursor-pointer"
              >
                {this.props.resetLabel || 'Reintentar'}
              </button>
              {!compact && (
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer"
                >
                  Recargar página
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
