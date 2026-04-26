import { FaBriefcase } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-portfolio-deep border-b border-portfolio-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 opacity-80"></div>

      <div className="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between gap-4 relative z-10">
        <a
          href="https://sinapsialab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 group"
          aria-label="SinapsiaLab"
        >
          <img
            src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1759686676/brainball_gsjoy9.png"
            alt="SinapsiaLab"
            className="h-9 md:h-10 w-auto object-contain"
            loading="eager"
            width="40"
            height="40"
          />
          <span className="font-semibold tracking-tight text-portfolio-text-light text-base md:text-lg leading-none">
            SinapsiaLab
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.18em] text-portfolio-text group-hover:text-portfolio-orange transition-colors leading-none pl-2 ml-1 border-l border-portfolio-accent">
            tutoriales
          </span>
        </a>

        <a
          href="https://sinapsialab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-portfolio-text hover:text-portfolio-orange transition-colors hidden md:inline"
        >
          sinapsialab.com →
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-8 pt-5 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-portfolio-accent text-xs uppercase tracking-widest text-portfolio-text">
          <FaBriefcase className="w-3.5 h-3.5 text-portfolio-orange" />
          Giía · Entrevistas y reuniones
        </div>

        <h1 className="gradient-glow inline-block text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
          <span className="gradient-text">Prepará tu entrevista</span>{' '}
          <span className="text-portfolio-text-light">con confianza</span>
        </h1>

        <p className="text-portfolio-text text-sm md:text-base max-w-xl mx-auto">
          Guía práctica si estás buscando empleo o si emprendes y necesitas cerrar proyectos con clientes.
        </p>

        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          <a href="#section-1" className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light hover:border-portfolio-orange hover:text-portfolio-orange transition-colors">Fundamentos</a>
          <a href="#section-2" className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light hover:border-portfolio-orange hover:text-portfolio-orange transition-colors">Comunicación</a>
          <a href="#section-5" className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light hover:border-portfolio-orange hover:text-portfolio-orange transition-colors">Escenarios</a>
          <a href="#section-14" className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light hover:border-portfolio-orange hover:text-portfolio-orange transition-colors">Práctica</a>
        </div>
      </div>
    </header>
  );
}
