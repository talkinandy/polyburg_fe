"use client";

import React, { useEffect, useState } from 'react';

interface ProblemStatementProps {
  className?: string;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative z-10 bg-terminal-bg border-t border-terminal-border ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Terminal-style header */}
          <div className={`mb-6 sm:mb-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-block border border-terminal-border bg-terminal-bg px-3 py-1.5 sm:px-4 sm:py-2 font-mono text-xs sm:text-sm text-terminal-muted hover:text-terminal-primary transition-colors duration-300">
              [SYSTEM] MARKET_ANALYSIS_REPORT
            </div>
          </div>
          
          {/* Problem statement text with enhanced terminal styling */}
          <div className={`bg-terminal-bg/50 border border-terminal-border rounded-lg p-6 sm:p-8 lg:p-10 backdrop-blur-sm hover:bg-terminal-bg/70 hover:border-terminal-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '400ms' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono leading-relaxed sm:leading-relaxed">
              <span className={`text-terminal-muted block sm:inline transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                Polymarket traders are flying blind.
              </span>
              <br className="hidden sm:block" />
              <span className={`text-terminal-primary glow-text block sm:inline transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                While smart wallets consistently profit from early positions,
              </span>
              <br className="hidden sm:block" />
              <span className={`text-terminal-muted block sm:inline transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                you&apos;re left guessing.
              </span>
              <br />
              <span className={`text-terminal-secondary font-bold glow-text text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-4 sm:mt-6 animate-pulse transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '1200ms' }}>
                Until now.
              </span>
            </p>
          </div>
          
          {/* Terminal-style footer */}
          <div className={`mt-6 sm:mt-8 transition-all duration-500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-block border border-terminal-border bg-terminal-bg px-3 py-1.5 sm:px-4 sm:py-2 font-mono text-xs sm:text-sm text-terminal-muted hover:text-terminal-secondary transition-colors duration-300">
              [STATUS] SOLUTION_AVAILABLE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement; 