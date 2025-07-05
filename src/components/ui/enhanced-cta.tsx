"use client";

import React, { useEffect, useState } from 'react';

const EnhancedCTA: React.FC = () => {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Fix hydration by ensuring client-side mounting
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only run scroll logic after client mounting
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const bentoGrid = document.querySelector('[data-bento-grid]');
      
      if (bentoGrid) {
        const rect = bentoGrid.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible !== showMobileCTA) {
          setShowMobileCTA(isVisible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient, showMobileCTA]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    console.log('Invite code submitted:', inviteCode);
  };

  // Don't render during server-side rendering
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Desktop Floating CTA - Overlays the bento grid */}
      <div className="hidden sm:block absolute inset-0 z-40 pointer-events-none">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <div className="bg-terminal-bg border border-terminal-border rounded-lg p-8 max-w-md mx-4 glow-border">
            <div className="text-center space-y-6">
              {/* Terminal header */}
              <div className="flex items-center justify-center space-x-2 text-terminal-primary font-mono text-sm">
                <span className="text-terminal-success">●</span>
                <span>[SYSTEM] TERMINAL_LOCKED</span>
              </div>
              
              {/* Main message */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-terminal-primary font-mono">
                  Access Terminal
                </h3>
                <p className="text-terminal-muted text-sm">
                  Enter your exclusive invite code to unlock real-time smart wallet intelligence
                </p>
              </div>

              {/* Input form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  placeholder="Enter exclusive invite code"
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-primary font-mono focus:border-terminal-primary focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-opacity-50 text-sm"
                  required
                />
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-terminal-primary text-terminal-bg font-bold rounded-lg hover:glow-border transition-all font-mono text-sm focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-opacity-50"
                >
                  🔓 Unlock Terminal Access →
                </button>
              </form>

              {/* Footer */}
              <div className="text-center">
                <p className="text-terminal-muted text-xs font-mono">
                  [STATUS] AWAITING_AUTHORIZATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA - Appears when bento grid is in view */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="region"
        aria-label="Terminal access"
      >
        <div className="bg-terminal-bg/80 border-t border-terminal-border p-4 backdrop-blur-sm shadow-2xl">
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Mobile header */}
              <div className="flex items-center justify-center space-x-2 text-terminal-primary font-mono text-xs">
                <span className="text-terminal-success">●</span>
                <span>[SYSTEM] TERMINAL_LOCKED</span>
              </div>
              
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter invite code"
                className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-primary font-mono focus:border-terminal-primary focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-opacity-50 text-sm"
                required
              />
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-terminal-primary text-terminal-bg font-bold rounded-lg hover:glow-border transition-all font-mono text-sm focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-opacity-50"
              >
                🔓 Access Terminal →
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedCTA; 