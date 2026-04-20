import { ReactNode } from 'react';

interface QAItemProps {
  number?: string;
  question: string;
  children: ReactNode;
}

export default function QAItem({ number, question, children }: QAItemProps) {
  return (
    <div className="panel-inner p-5 mb-4">
      <h4 className="text-base md:text-lg font-bold text-portfolio-text-light mb-3 leading-snug">
        {number && <span className="gradient-text mr-2">{number}</span>}
        {question}
      </h4>
      <div className="text-portfolio-text-light/90 text-sm md:text-base leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
