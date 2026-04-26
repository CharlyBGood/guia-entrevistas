import { ReactNode } from 'react';

interface QAItemProps {
  number?: string;
  question: string;
  children: ReactNode;
}

export default function QAItem({ number, question, children }: QAItemProps) {
  return (
    <div className="mb-5 pb-4 border-b border-portfolio-accent/40 last:border-0 last:pb-0 last:mb-0">
      <h4 className="text-sm md:text-base font-semibold text-portfolio-text-light mb-2 leading-snug">
        {number && <span className="gradient-text mr-1.5">{number}</span>}
        {question}
      </h4>
      <div className="text-portfolio-text/90 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
