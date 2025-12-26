
import React, { useState, useEffect } from 'react';
import Assessment from './components/Assessment';
import { STANDARD_CONTENT } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'standard' | 'quiz'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItemClass = (active: boolean) =>
    `px-4 py-2 text-sm transition-all duration-300 ${active ? 'text-stone-900 font-bold border-b-2 border-stone-900' : 'text-stone-400 hover:text-stone-600'}`;

  const handleNavClick = (newView: 'home' | 'standard' | 'quiz') => {
    setView(newView);
    setIsMenuOpen(false);
  };

  const getMenuTitle = () => {
    switch(view) {
      case 'standard': return 'THE STANDARD';
      case 'quiz': return 'ASSESSMENT';
      default: return 'NAVIGATION';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 selection:bg-stone-900 selection:text-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-[100] bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative">
          <div 
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer group z-[110]"
            onClick={() => handleNavClick('home')}
          >
            <span className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:scale-105 transition-transform">∴IA</span>
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-sm font-black text-stone-900 group-hover:opacity-70 transition-opacity whitespace-nowrap">Therefore I Am</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <button onClick={() => setView('home')} className={navItemClass(view === 'home')}>HOME</button>
            <button onClick={() => setView('standard')} className={navItemClass(view === 'standard')}>STANDARD</button>
            <button onClick={() => setView('quiz')} className={navItemClass(view === 'quiz')}>ASSESSMENT</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-[110] p-2 -mr-2 text-stone-900 transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-full rotate-45 translate-y-[7px]' : 'w-full'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-2/3'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-full -rotate-45 -translate-y-[7px]' : 'w-full'}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-stone-50 z-[105] transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
          }`}
        >
          <div className="h-full flex flex-col pt-24 px-8">
            {/* Editorial Watermark Style - Darkened text-stone-300 to text-stone-500 */}
            <div className="relative flex items-center justify-center mb-16">
              <div className="absolute w-full h-[1px] bg-stone-200"></div>
              <span className="relative bg-stone-50 px-4 text-stone-500 text-3xl font-bold serif tracking-widest uppercase italic">
                {getMenuTitle()}
              </span>
            </div>

            <div className="flex flex-col space-y-10 items-center">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`text-4xl font-bold serif tracking-tight transition-all duration-300 ${view === 'home' ? 'text-stone-900 scale-110' : 'text-stone-500 hover:text-stone-700'}`}
              >
                HOME
              </button>
              <button 
                onClick={() => handleNavClick('standard')} 
                className={`text-4xl font-bold serif tracking-tight transition-all duration-300 ${view === 'standard' ? 'text-stone-900 scale-110' : 'text-stone-500 hover:text-stone-700'}`}
              >
                THE STANDARD
              </button>
              <button 
                onClick={() => handleNavClick('quiz')} 
                className={`text-4xl font-bold serif tracking-tight transition-all duration-300 ${view === 'quiz' ? 'text-stone-900 scale-110' : 'text-stone-500 hover:text-stone-700'}`}
              >
                ASSESSMENT
              </button>
            </div>
            
            <div className="mt-auto mb-12 text-center">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 mb-2">Human Origin Protocol</div>
              <p className="text-[9px] text-stone-500 font-mono">∴IA / ORIGIN v{STANDARD_CONTENT.version}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-grow transition-all duration-500 ${isMenuOpen ? 'blur-md scale-[0.98] opacity-50' : 'blur-0 scale-100 opacity-100'}`}>
        {view === 'home' && (
          <div className="animate-in fade-in duration-1000">
            {/* Hero Section */}
            <section className="py-20 md:py-32 px-6 text-center max-w-2xl mx-auto flex flex-col items-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-8xl font-bold serif tracking-tighter leading-none">
                  Human <span className="italic">Creative</span> Origin.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-light">
                <span className="font-bold">∴IA</span> certifies the origin of authorship. We provide a voluntary standard to distinguish works created by human ingenuity from those generated by machines.
              </p>

              <div className="flex flex-col w-full max-w-sm gap-4">
                <button 
                  onClick={() => setView('quiz')}
                  className="w-full px-10 py-5 bg-[#141414] text-white rounded-[2rem] hover:bg-black transition-all shadow-xl shadow-stone-200 uppercase tracking-widest text-xs font-bold"
                >
                  Verify Your Work
                </button>
                <button 
                  onClick={() => setView('standard')}
                  className="w-full px-10 py-5 border border-stone-200 bg-white text-stone-800 rounded-[2rem] hover:bg-stone-50 transition-all uppercase tracking-widest text-xs font-bold animate-soft-pulse"
                >
                  Read the Standard
                </button>
              </div>
            </section>
          </div>
        )}

        {view === 'standard' && (
          <div className="max-w-4xl mx-auto py-12 md:py-24 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="border-b-4 border-stone-900 pb-12 mb-12 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold serif mb-4 tracking-tighter uppercase">∴IA / ORIGIN — Standard</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-stone-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">
                <span>Version {STANDARD_CONTENT.version}</span>
                <span>Effective: {STANDARD_CONTENT.effectiveDate}</span>
                <span>Authority: ∴IA</span>
              </div>
            </div>

            <div className="space-y-16">
              {STANDARD_CONTENT.sections.map(section => (
                <section key={section.id} className="group">
                  <h3 className="text-2xl font-bold mb-6 serif group-hover:translate-x-2 transition-transform">{section.title}</h3>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-6">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-stone-100 shadow-sm transition-all hover:border-stone-200">
                          <span className="text-stone-200 font-bold">•</span>
                          <span className="text-stone-700 leading-relaxed font-medium text-base md:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-lg md:text-xl text-stone-600 leading-relaxed border-l-2 border-stone-100 pl-6 md:pl-10 font-light">
                      {section.content}
                    </p>
                  )}
                </section>
              ))}

              <section className="bg-stone-900 text-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl shadow-stone-300">
                <h3 className="text-2xl font-bold mb-4 serif italic">Disclaimer</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  ∴IA is a voluntary certification mark and not a government authority or legal determination. This standard certifies origin of authorship, not quality, legality, or ownership. End of ∴IA / ORIGIN Standard v1.0.
                </p>
              </section>
            </div>
          </div>
        )}

        {view === 'quiz' && (
          <div className="min-h-[80vh] flex items-center animate-in fade-in duration-500 px-6">
            <Assessment />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-black mb-1 uppercase tracking-[0.3em]">Therefore I Am</div>
            <p className="text-stone-400 text-[10px] uppercase tracking-widest font-mono">Human Origin Protocol</p>
          </div>
          
          <div className="text-[10px] text-stone-300 font-mono tracking-widest">
            © 2025 THEREFORE I AM
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
