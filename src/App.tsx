import {
  Briefcase,
  Target,
  MessageCircle,
  Lightbulb,
  Users,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Compass,
  Mic,
  BookOpen,
  Sparkles,
  Layers,
  ListChecks,
  TrendingUp,
  Handshake,
  Wrench,
  Brain,
  Key,
} from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import InfoBox from './components/InfoBox';
import Checklist from './components/Checklist';
import QAItem from './components/QAItem';
import Example from './components/Example';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-portfolio-deep text-portfolio-text-light">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pt-8 pb-24 relative z-10">
        {/* Intro panel */}
        <div className="panel mb-8 p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <Briefcase className="w-7 h-7 text-portfolio-orange flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-portfolio-text-light mb-2">
                Cómo prepararte para una entrevista (o reunión con un cliente)
              </h2>
              <p className="text-portfolio-text">
                Una guía pensada para profesionales en búsqueda de empleo y emprendedores que quieren cerrar proyectos con confianza.
              </p>
            </div>
          </div>

          <div className="panel-inner mt-6 p-4 font-mono text-xs md:text-sm">
            <pre className="gradient-text overflow-x-auto">
{`╔══════════════════════════════════════════════════════════╗
║  GUÍA PRÁCTICA: ENTREVISTAS Y REUNIONES CON CLIENTES    ║
║  Fundamentos · Comunicación · Escenarios · Práctica     ║
╚══════════════════════════════════════════════════════════╝`}
            </pre>
          </div>

          <div className="mt-6 space-y-4 text-portfolio-text-light/90">
            <p>
              Ya sea que estés aplicando a un nuevo rol o presentándote ante un potencial cliente, las dinámicas son más similares de lo que parecen: en ambos casos tenés que <strong>comunicar valor</strong>, <strong>generar confianza</strong> y demostrar que sos la persona indicada para el trabajo.
            </p>
            <p>
              Esta guía está dividida en dos partes. La primera cubre los fundamentos de cualquier entrevista o reunión. La segunda profundiza en los escenarios más frecuentes y cómo prepararte para responderlos bien.
            </p>
          </div>
        </div>

        <InfoBox type="success" icon={<CheckCircle2 />} title="Regla de oro">
          <p>La honestidad con entusiasmo genuino es más poderosa que cualquier historia fabricada, y mucho más sostenible.</p>
        </InfoBox>

        {/* Parte 1 separator */}
        <div className="panel mb-8 p-6 text-center">
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full border border-portfolio-accent text-xs uppercase tracking-widest text-portfolio-text">
            <Compass className="w-3.5 h-3.5 text-portfolio-orange" />
            Parte 1
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            <span className="gradient-text">Fundamentos</span>{' '}
            <span className="text-portfolio-text-light">y preguntas clave</span>
          </h2>
        </div>

        <Section
          id="1"
          title="Antes de la entrevista o reunión"
          icon={<Target className="w-8 h-8" />}
        >
          <QAItem number="1." question="¿Qué es lo primero que deberías hacer cuando te informan sobre una entrevista o reunión próxima?">
            <p>
              Es una buena práctica <strong>investigar</strong> sobre la empresa, el cliente o el proyecto, entender qué se espera del rol o del servicio, y repasar cualquier información relevante que te permita llegar preparado.
            </p>
            <p>
              Si hay tiempo, una <strong>simulación con alguien de confianza</strong> puede marcar una gran diferencia.
            </p>
          </QAItem>

          <QAItem number="2." question="¿Qué partes se pueden prever y deben prepararse con anticipación?">
            <p>
              Casi siempre van a aparecer preguntas sobre tu <strong>trayectoria</strong>, tu <strong>experiencia técnica o profesional</strong>, y tu <strong>forma de trabajar con otros</strong>. También es esperable que quieran evaluar tus habilidades blandas y cómo resolvés problemas.
            </p>
            <p>
              Personalizá tu presentación para el contexto: un CV adaptado al rol, o un portfolio/propuesta orientada al cliente. Tené claro qué fortalezas querés destacar y cómo se alinean con lo que la otra parte necesita.
            </p>
          </QAItem>

          <QAItem number="3." question="¿De qué manera presentar información esencial sobre vos o tu trabajo?">
            <p>
              Sé <strong>claro, conciso</strong> y enfocate en el valor que aportaste. Evitá extenderte en detalles irrelevantes. Lo que importa es que quien te escucha entienda rápidamente por qué sos la opción correcta.
            </p>
          </QAItem>

          <QAItem number="6." question="¿Por qué conviene repasar tu CV o portfolio antes?">
            <p>
              Para ser <strong>consistente</strong>. Si mencionás algo en tu presentación, tenés que poder desarrollarlo. El repaso también te ayuda a anticipar preguntas que pueden surgir de lo que mostrás.
            </p>
          </QAItem>
        </Section>

        <Section
          id="2"
          title="Durante la conversación"
          icon={<MessageCircle className="w-8 h-8" />}
        >
          <QAItem number="4." question="¿Por qué es importante hacer preguntas?">
            <p>
              Hacer preguntas muestra <strong>interés genuino</strong>, genera confianza y te da información valiosa. También te da tiempo para acomodarte si estás nervioso. La clave es que sean preguntas <strong>relevantes</strong>, no relleno.
            </p>
          </QAItem>

          <QAItem number="5." question="¿Cómo demostrás que sabés trabajar en equipo o con clientes?">
            <p>
              Hablá de <strong>situaciones reales</strong>: cómo colaboraste en proyectos, qué rol tuviste, cómo manejaste tareas compartidas o cómo llevaste ideas a la mesa.
            </p>
            <p>
              Los <strong>ejemplos concretos</strong> valen mucho más que las afirmaciones genéricas.
            </p>
          </QAItem>

          <QAItem number="7." question="¿Qué comportamiento genera una buena impresión?">
            <p>
              Ser <strong>puntual, respetuoso, seguro y entusiasta</strong>. No hace falta ser perfecto, pero sí demostrar que tomás esto en serio.
            </p>
            <p>
              Ni arrogante ni excesivamente humilde: el <strong>equilibrio</strong> siempre comunica mejor.
            </p>
          </QAItem>

          <QAItem number="8." question="¿Qué formato deben tener tus respuestas?">
            <p>
              <strong>Concisas pero completas.</strong> Ir al punto sin quedarse corto. Evitá el monosílabo tanto como el monólogo. Una respuesta bien articulada, sin rodeos, genera confianza.
            </p>
          </QAItem>

          <QAItem number="9." question="¿Cómo presentar información esencial?">
            <p>
              Con <strong>estructura y claridad</strong>. Evitá detalles que distraigan del mensaje principal. Si podés decirlo en tres oraciones bien construidas, no necesitás diez.
            </p>
          </QAItem>
        </Section>

        <Section
          id="3"
          title="Cómo manejar la incertidumbre"
          icon={<HelpCircle className="w-8 h-8" />}
        >
          <QAItem number="10." question="¿Qué hacer si no podés responder algo?">
            <p>
              Ser <strong>transparente</strong>. Podés apoyarte en algo relacionado que sí conozcas, o simplemente indicar que es un área en la que te interesaría profundizar.
            </p>
            <p>
              La honestidad bien comunicada suma, no resta.
            </p>
          </QAItem>

          <QAItem number="11." question="¿Qué hacer si te quedás en blanco con algo que sabés?">
            <p>
              Pedí un momento o proponé volver a esa pregunta después. <strong>No te apures.</strong> Si realmente conocés el tema, un minuto para ordenar los pensamientos es mucho mejor que una respuesta apresurada y confusa.
            </p>
          </QAItem>

          <QAItem number="12." question="¿Qué hacer si no entendés una palabra o pregunta?">
            <p>
              Intentá inferir por el contexto. Si no podés, <strong>pedí una aclaración sin problema</strong>. Es mucho mejor que responder algo que no corresponde.
            </p>
            <InfoBox type="warning" icon={<AlertTriangle />}>
              <p>No busques nada en el momento, eso sí puede dar mala impresión.</p>
            </InfoBox>
          </QAItem>

          <QAItem number="13." question="¿Cómo responder cuando solo tenés una respuesta negativa?">
            <p>
              Dale un <strong>giro constructivo</strong>. Mostrar que aprendiste de una experiencia difícil, o que pudiste sacar algo valioso de ella, dice mucho más de vos que pretender que todo siempre salió bien.
            </p>
          </QAItem>
        </Section>

        <Section
          id="4"
          title="Lenguaje, tono y feedback"
          icon={<Mic className="w-8 h-8" />}
        >
          <QAItem number="14." question="¿Qué tipo de lenguaje conviene usar?">
            <p>
              Palabras <strong>positivas, orientadas a la acción</strong>, que transmitan que estás enfocado en aportar y mejorar. El lenguaje que usás moldea la percepción que generás.
            </p>
          </QAItem>

          <QAItem number="15." question="¿Para qué sirve el feedback después de una entrevista o reunión?">
            <p>
              Para <strong>aprender</strong>. Cada instancia de feedback es información sobre cómo estás comunicando y qué podés ajustar.
            </p>
            <p>
              Tomarlo con apertura, sin defensividad, es una de las mejores inversiones que podés hacer.
            </p>
          </QAItem>
        </Section>

        <Section
          id="5"
          title="Situaciones frecuentes y cómo manejarlas"
          icon={<Sparkles className="w-8 h-8" />}
        >
          <div className="space-y-5">
            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Silencio prolongado durante la conversación</h4>
              <p>No lo rellenes con cualquier cosa. Si el silencio es del otro lado, esperá con calma. Si es tuyo, tomá un momento, ordenate y respondé con foco. Solo compartí una anécdota si es genuinamente relevante.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Tener un cheat sheet o lista de referencia a mano</h4>
              <p>Útil si lo usás como apoyo discreto, no como muleta. Puede ayudarte a no olvidar algo importante, pero sin depender de él ni hacerlo evidente.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Pedir que reformulen una pregunta</h4>
              <p>Totalmente válido. Demuestra atención y buena comunicación. Mucho mejor que responder algo que no corresponde.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Mostrar entusiasmo vs. ser impersonal</h4>
              <p>Un tono profesional no implica ser frío. Mostrar interés genuino y energía adecuada genera una impresión positiva. El equilibrio entre lo profesional y lo humano siempre funciona mejor.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Preguntar demasiado</h4>
              <p>El interés es bienvenido, el exceso puede parecer forzado. Elegí tus preguntas con criterio.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Inventar logros o exagerar</h4>
              <InfoBox type="warning" icon={<AlertTriangle />}>
                <p><strong>Nunca.</strong> La honestidad con entusiasmo genuino es más poderosa que cualquier historia fabricada, y mucho más sostenible.</p>
              </InfoBox>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Personalizar tu presentación para el contexto</h4>
              <p>Siempre. Mostrar que investigaste y te preparaste específicamente para esa oportunidad marca la diferencia.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Cerrar con una nota positiva</h4>
              <p>Mejor que neutro. Un cierre positivo deja una impresión duradera.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Usar lenguaje impactante</h4>
              <p>Sí, pero con respaldo. Podés hablar con convicción sobre lo que hacés, siempre que puedas sostenerlo.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">La falsa modestia</h4>
              <p>El equilibrio es mejor que cualquier extremo. No subestimes tus logros, pero tampoco los infles.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Enseñarle algo al entrevistador o cliente</h4>
              <p>Con cuidado y solo si agrega valor real al contexto. No es el momento de lucirse técnicamente sin necesidad.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Bluffear cuando no sabés algo</h4>
              <InfoBox type="warning" icon={<AlertTriangle />}>
                <p><strong>Nunca.</strong> Reconocer que no sabés algo y mostrar disposición a aprenderlo es una respuesta válida y profesional.</p>
              </InfoBox>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Respuestas muy cortas</h4>
              <p>El monosílabo da mala impresión. Hablá, articulá, demostrá que podés comunicarte.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Tener materiales de referencia cerca</h4>
              <p>Está bien como apoyo, pero no como reemplazo de la preparación. La fluidez sigue siendo clave.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">En reuniones remotas: voz y energía</h4>
              <InfoBox type="info" icon={<Mic />}>
                <p>Si no hay video, tu voz es todo. Variá el tono, mostrá interés, hablá con claridad. La energía se transmite igual.</p>
              </InfoBox>
            </div>
          </div>
        </Section>

        {/* Parte 2 separator */}
        <div className="panel mb-8 p-6 text-center mt-12">
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full border border-portfolio-accent text-xs uppercase tracking-widest text-portfolio-text">
            <Layers className="w-3.5 h-3.5 text-portfolio-orange" />
            Parte 2
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            <span className="gradient-text">Escenarios frecuentes</span>{' '}
            <span className="text-portfolio-text-light">y cómo prepararte</span>
          </h2>
        </div>

        <Section
          id="6"
          title="Sobre tu trayectoria"
          icon={<TrendingUp className="w-8 h-8" />}
        >
          <QAItem question="¿Cómo llegaste a este rol o área y cómo fue tu camino?">
            <p>
              Se busca entender <strong>motivación, evolución y continuidad</strong>. Lo ideal: conectar tu historia con el presente de forma natural.
            </p>
            <Example>
              "Llegué desde un camino no convencional, combinando experiencia práctica con formación estructurada. Cada etapa me aportó algo distinto, y eso hoy me da una perspectiva más amplia para encarar proyectos."
            </Example>
          </QAItem>
        </Section>

        <Section
          id="7"
          title="Habilidades técnicas o de servicio"
          icon={<Wrench className="w-8 h-8" />}
        >
          <QAItem question="¿Podés contarnos sobre un proyecto reciente donde aplicaste tus habilidades principales?">
            <p>
              Se evalúa <strong>capacidad técnica y trabajo en equipo</strong>. Lo ideal: tecnologías o herramientas concretas, tu rol y el impacto.
            </p>
            <Example>
              "Trabajé en el desarrollo de un módulo dentro de un sistema más grande. Me encargué de una parte específica, coordiné con un colega y también aporté en decisiones de diseño. Ver el resultado funcionando como esperábamos fue muy satisfactorio."
            </Example>
          </QAItem>
        </Section>

        <Section
          id="8"
          title="Resolución de problemas"
          icon={<Brain className="w-8 h-8" />}
        >
          <QAItem question="¿Podés describir un problema desafiante que enfrentaste y cómo lo resolviste?">
            <p>
              Se evalúa <strong>criterio, tolerancia a la frustración y método</strong>. Lo importante: mostrar el proceso, no solo el resultado.
            </p>
            <Example>
              "Nos encontramos con un comportamiento inesperado sin solución directa. Probamos distintos enfoques, descartamos los que no eran eficientes y llegamos a algo más simple de lo que pensábamos. Lo clave fue no perder tiempo en caminos sin salida y mantener al equipo informado."
            </Example>
          </QAItem>
        </Section>

        <Section
          id="9"
          title="Aprendizaje autónomo"
          icon={<BookOpen className="w-8 h-8" />}
        >
          <QAItem question="¿Cuál fue el proyecto más desafiante donde tuviste que aprender algo nuevo sobre la marcha?">
            <p>
              Se busca <strong>autonomía y adaptación</strong>. Lo ideal: iniciativa, recursos propios y aplicación concreta.
            </p>
            <Example>
              "Tuve que trabajar con algo que conocía parcialmente. Me apoyé en documentación, hice pruebas y pedí orientación cuando fue necesario. Al final funcionó bien y me quedé con conocimiento que sigo aplicando."
            </Example>
          </QAItem>
        </Section>

        <Section
          id="10"
          title="Desarrollo profesional"
          icon={<Lightbulb className="w-8 h-8" />}
        >
          <QAItem question="¿Cómo estás encarando tu crecimiento profesional?">
            <p>
              Buscan ver <strong>compromiso con el aprendizaje continuo</strong>. La formación o certificación debe verse como medio, no como fin.
            </p>
            <Example>
              "Combino estudio teórico con práctica real. Me interesa entender el fondo de las cosas, no solo cumplir un requisito. Eso es lo que guía cómo me preparo y qué elijo aprender."
            </Example>
          </QAItem>
        </Section>

        <Section
          id="11"
          title="Comunicación"
          icon={<Users className="w-8 h-8" />}
        >
          <QAItem question="¿Cómo garantizás una comunicación efectiva?">
            <p>
              Se evalúa <strong>capacidad de trabajo colaborativo</strong>. Lo ideal: claridad, escucha activa, adaptación.
            </p>
            <Example>
              "Trato de ser directo y conciso, especialmente cuando hay dependencias con otros. Si algo no quedó claro, prefiero preguntar antes que asumir."
            </Example>
          </QAItem>
        </Section>

        <Section
          id="12"
          title="Las 4 claves para responder bien cualquier pregunta"
          icon={<Key className="w-8 h-8" />}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="panel-inner p-5">
              <div className="flex items-start gap-3">
                <span className="gradient-text text-2xl font-extrabold">1.</span>
                <div>
                  <h4 className="font-bold text-portfolio-text-light mb-1">Detallá tus acciones</h4>
                  <p className="text-sm text-portfolio-text-light/90">Qué hiciste vos, no solo el equipo.</p>
                </div>
              </div>
            </div>

            <div className="panel-inner p-5">
              <div className="flex items-start gap-3">
                <span className="gradient-text text-2xl font-extrabold">2.</span>
                <div>
                  <h4 className="font-bold text-portfolio-text-light mb-1">Mostrá colaboración</h4>
                  <p className="text-sm text-portfolio-text-light/90">Cómo trabajaste con otros y qué aprendiste.</p>
                </div>
              </div>
            </div>

            <div className="panel-inner p-5">
              <div className="flex items-start gap-3">
                <span className="gradient-text text-2xl font-extrabold">3.</span>
                <div>
                  <h4 className="font-bold text-portfolio-text-light mb-1">Mencioná el resultado</h4>
                  <p className="text-sm text-portfolio-text-light/90">Impacto concreto, validación, feedback recibido.</p>
                </div>
              </div>
            </div>

            <div className="panel-inner p-5">
              <div className="flex items-start gap-3">
                <span className="gradient-text text-2xl font-extrabold">4.</span>
                <div>
                  <h4 className="font-bold text-portfolio-text-light mb-1">Cerrá con aprendizaje</h4>
                  <p className="text-sm text-portfolio-text-light/90">Qué te llevaste de esa experiencia.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="13"
          title="Temas clave para preparar"
          icon={<ListChecks className="w-8 h-8" />}
        >
          <p className="mb-6 italic text-portfolio-text">
            Antes de cualquier entrevista técnica o reunión con cliente, tené historias listas para estos temas:
          </p>

          <div className="space-y-5">
            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Desafío concreto que enfrentaste</h4>
              <p>Preparate con una historia real: contexto, qué intentaste, por qué no funcionó, solución y aprendizaje.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Buenas prácticas en tu trabajo</h4>
              <p>Hablá de cómo organizás tu trabajo, cómo priorizás la calidad y qué principios guían tu forma de hacer las cosas.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Cuándo usar soluciones existentes vs. construir algo nuevo</h4>
              <p>Mostrá criterio para no reinventar la rueda, pero también capacidad para ir más allá cuando es necesario.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Cómo manejás cambios sin romper lo que ya funciona</h4>
              <p>Describí tu proceso: entorno de prueba, validación, revisión antes de aplicar cambios.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Cómo aprendés cosas nuevas en el trabajo</h4>
              <p>Recursos, personas a quienes recurrís, cómo aplicás lo que aprendés.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Trabajo en equipo o con clientes</h4>
              <p>Dinámicas reales: comunicación de dependencias, impacto cruzado, visión de conjunto más allá de tu tarea.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Límites y restricciones de tu herramienta o contexto</h4>
              <p>Mostrá que los conocés y que tenés criterio para trabajar dentro de ellos.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Del requerimiento a la solución</h4>
              <p>Demostrá que siempre respondés a un objetivo concreto, aunque no tengas contacto directo con quien lo define.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Priorización bajo presión</h4>
              <p>Cómo decidís qué va primero: impacto, dependencias, comunicación.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Debugging o resolución de errores</h4>
              <p>Proceso claro: identificación, análisis, validación, solución. Método, no solo resultado.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Una contribución específica a un proyecto</h4>
              <p>Contexto, tu rol, el desafío y el impacto. Siempre termina con lo que aprendiste.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-portfolio-orange mb-2">Aprendizaje continuo</h4>
              <p>Una rutina activa: documentación, cursos, práctica, comunidad. Demostrá que seguir aprendiendo es parte de tu perfil.</p>
            </div>
          </div>
        </Section>

        <Section
          id="14"
          title="Preguntas técnicas o de fondo para preparar"
          icon={<HelpCircle className="w-8 h-8" />}
        >
          <InfoBox type="info" icon={<Lightbulb />} title="Formato de preparación">
            <p>El contenido varía según el rol o el contexto, pero el formato de preparación es siempre el mismo: <strong>respondé con ejemplos concretos</strong>.</p>
          </InfoBox>

          <ul className="space-y-3 mt-4">
            {[
              '¿Cuáles son los fundamentos del área en la que trabajás?',
              '¿Cómo estructurás y organizás tu trabajo?',
              '¿Cuál es la diferencia entre las principales herramientas o enfoques que usás?',
              '¿Cómo manejás y trabajás con datos o información?',
              '¿Cómo validás o testeás tu trabajo?',
              '¿Cómo integrás tu trabajo con otros sistemas o personas?',
              '¿Cómo asegurás calidad en lo que entregás?',
              '¿Podés describir una solución personalizada que hayas implementado?',
              '¿Cuáles son las mejores prácticas que aplicás en tu día a día?',
              '¿Podés guiarnos por un proyecto en el que hayas trabajado y cuál fue tu rol?',
            ].map((q, i) => (
              <li key={i} className="panel-inner p-4 flex items-start gap-3">
                <span className="gradient-text font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-portfolio-text-light">{q}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="15"
          title="Checklist final antes de la entrevista"
          icon={<CheckCircle2 className="w-8 h-8" />}
        >
          <Checklist items={[
            'Investigué sobre la empresa, el cliente o el proyecto',
            'Repasé mi CV o portfolio y puedo desarrollar cada punto',
            'Personalicé mi presentación para este contexto específico',
            'Tengo listas 2 o 3 historias concretas para contar',
            'Preparé preguntas relevantes para hacer',
            'Ensayé mi pitch de presentación (idealmente con alguien)',
            'Identifiqué mis fortalezas principales para destacar',
            'Pensé cómo dar giro constructivo a experiencias difíciles',
            'Planeé un cierre positivo para la conversación',
            'Descansé bien y me siento con energía',
          ]} />
        </Section>

        <div className="panel mb-8 p-6 md:p-8 mt-12 text-center">
          <Handshake className="w-10 h-10 text-portfolio-orange mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
            <span className="gradient-text">Comunicá valor.</span>{' '}
            <span className="text-portfolio-text-light">Generá confianza.</span>
          </h3>
          <p className="text-portfolio-text max-w-2xl mx-auto">
            La preparación no elimina los nervios: te da algo sólido sobre lo que apoyarte cuando aparecen.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
