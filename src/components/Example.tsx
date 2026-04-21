import { ReactNode } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface ExampleProps {
  children: ReactNode;
}

export default function Example({ children }: ExampleProps) {
  return (
    <div className="mt-3 border-l-2 border-portfolio-orange/60 pl-4 py-2 bg-portfolio-orange/5 rounded-r-md">
      <div className="flex items-start gap-2">
        <FaQuoteLeft className="w-4 h-4 text-portfolio-orange flex-shrink-0 mt-1" />
        <div>
          <span className="text-xs uppercase tracking-wider text-portfolio-orange font-semibold block mb-1">
            Ejemplo
          </span>
          <p className="italic text-portfolio-text-light/90 text-sm md:text-base leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
