import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section id={`section-${id}`} className="mb-10 scroll-mt-8">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex-shrink-0 text-portfolio-orange w-4 h-4">
          {icon}
        </div>
        <h2 className="text-lg md:text-xl font-bold text-portfolio-text-light">
          <span className="gradient-text mr-1.5">{id})</span>
          {title}
        </h2>
      </div>
      <div className="h-px bg-gradient-to-r from-portfolio-orange/50 via-pink-500/20 to-transparent mb-5"></div>

      <div className="text-portfolio-text-light">
        {children}
      </div>
    </section>
  );
}
