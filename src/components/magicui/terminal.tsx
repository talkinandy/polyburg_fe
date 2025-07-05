'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp?: Date;
}

interface TerminalProps {
  className?: string;
  initialLines?: TerminalLine[];
  showHeader?: boolean;
  title?: string;
}

export default function Terminal({
  className,
  initialLines = [],
  showHeader = true,
  title = 'POLYBURG TERMINAL v1.0',
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [currentInput, setCurrentInput] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [isClient, setIsClient] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Fix hydration by ensuring client-side mounting
  useEffect(() => {
    setIsClient(true);
    setCurrentTime(new Date().toLocaleTimeString());
    
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Demo data simulation
  useEffect(() => {
    if (!isClient) return;
    
    const demoLines: TerminalLine[] = [
      { type: 'output', content: 'POLYBURG TERMINAL v1.0 - Smart Wallet Intelligence' },
      { type: 'output', content: 'Connected to Polymarket data feed...' },
      { type: 'output', content: '> Monitoring 1,247 profitable wallets' },
      { type: 'output', content: '> Last update: 2024-12-30 15:42:03 UTC' },
      { type: 'command', content: 'show-top-wallets --limit=5' },
      { type: 'output', content: '┌─────────────────────────────────────────────────────┐' },
      { type: 'output', content: '│ TOP PERFORMING WALLETS (24H)                       │' },
      { type: 'output', content: '├─────────────────────────────────────────────────────┤' },
      { type: 'output', content: '│ 0x42a1...9f3e  │ +$12,450 │ 84.2% Win Rate       │' },
      { type: 'output', content: '│ 0x7b8c...2d1a  │ +$8,920  │ 79.6% Win Rate       │' },
      { type: 'output', content: '│ 0x9e3f...5c4b  │ +$7,330  │ 76.8% Win Rate       │' },
      { type: 'output', content: '└─────────────────────────────────────────────────────┘' },
      { type: 'command', content: 'track-wallet 0x42a1...9f3e' },
      { type: 'output', content: '✓ Now tracking wallet 0x42a1...9f3e' },
      { type: 'output', content: '> Recent activity: 3 new positions in last 2 hours' },
    ];

    setLines(demoLines);
  }, [isClient]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const newLine: TerminalLine = {
      type: 'command',
      content: currentInput,
      timestamp: new Date(),
    };

    setLines(prev => [...prev, newLine]);
    setCurrentInput('');

    // Simulate command processing
    setTimeout(() => {
      const response: TerminalLine = {
        type: 'output',
        content: `Command '${currentInput}' executed. Use 'help' for available commands.`,
        timestamp: new Date(),
      };
      setLines(prev => [...prev, response]);
    }, 500);
  };

  return (
    <div
      className={cn(
        'flex flex-col bg-terminal-bg border border-terminal-border rounded-lg overflow-hidden',
        'font-mono text-sm',
        className,
      )}
    >
      {showHeader && (
        <div className="flex items-center justify-between px-4 py-2 bg-terminal-border border-b border-terminal-border">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-terminal-danger"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
            </div>
            <span className="text-terminal-primary font-semibold">{title}</span>
          </div>
          <div className="text-terminal-muted text-xs">
            {isClient ? currentTime : '00:00:00'}
          </div>
        </div>
      )}

      <div
        ref={terminalRef}
        className="flex-1 p-4 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-border scrollbar-track-transparent"
      >
        {lines.map((line, index) => (
          <div
            key={index}
            className={cn(
              'mb-1',
              line.type === 'command' && 'text-terminal-primary',
              line.type === 'output' && 'text-terminal-secondary',
              line.type === 'error' && 'text-terminal-danger',
            )}
          >
            {line.type === 'command' && <span className="text-terminal-success">$ </span>}
            {line.content}
          </div>
        ))}

        <form onSubmit={handleInputSubmit} className="flex items-center mt-2">
          <span className="text-terminal-success mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent text-terminal-primary border-none outline-none"
            placeholder="Enter command..."
            autoFocus
          />
          <span className="animate-pulse text-terminal-primary">_</span>
        </form>
      </div>
    </div>
  );
} 