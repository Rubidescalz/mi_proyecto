import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Github, Mail, Code2, ArrowUpRight, Linkedin, FileText } from "lucide-react";
import miPerfil from "../assets/perfil.png";

const Home = () => {
  const email = "ivan.mejia@uss.edu.pe"; // TODO: reemplazar por el correo definitivo

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-400/20 selection:text-emerald-300">
      {/* Fondo decorativo animado */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 animate-slow-pan" />
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px] animate-float" style={{ animationDuration: "9s" }} />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px] animate-float" style={{ animationDuration: "11s", animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px] animate-float" style={{ animationDuration: "13s", animationDelay: "4s" }} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            <a href="#" className="flex items-center gap-3 group" aria-label="Inicio">
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
                  IM
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-0 blur group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold tracking-tight text-white">Ing Ivan Mejia</div>
                <div className="text-xs text-slate-500">Full Stack Developer</div>
              </div>
            </a>

            <div className="flex items-center gap-2">
              <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Sobre mí
              </a>
              <a href="#projects" className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg:white/5">
                Proyectos
              </a>
              <div className="h-4 w-px bg-white/10 mx-2" />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${email}`}
                className="px-4 py-2 text-sm font-medium bg-white text-slate-950 rounded-lg hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/10 ml-2"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10 pt-32 pb-16 md:pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
            {/* Columna izquierda */}
            <div className="opacity-0 animate-fade-in-up [animation-delay:150ms]">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 mb-8 group hover:bg-emerald-500/15 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Ingeniero de Sistemas
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                <span className="block text-white leading-tight">Construyendo el futuro,</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                  una línea de código a la vez.
                </span>
              </h1>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all hover:shadow-xl hover:shadow-white/20 hover:scale-[1.02] active:scale-95"
                >
                  Ver Proyectos
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                >
                  <Mail size={18} />
                  Contacto
                </a>
              </div>
            </div>

            {/* Columna derecha: foto grande con animación */}
            <div className="relative mx-auto md:mx-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] xl:w-[360px] xl:h-[360px] opacity-0 animate-fade-in-up [animation-delay:300ms]">
              {/* Glow animado */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald-400/25 via-cyan-400/20 to-blue-400/20 blur-3xl animate-pulse-slow" aria-hidden="true" />
              {/* Marco */}
              <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl shadow-black/30 hover:shadow-emerald-500/10 transition-shadow">
                <img
                  src={miPerfil}
                  alt="Foto de perfil de Ing. Heber Iván Mejía Cabrera"
                  className="h-full w-full rounded-[2rem] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decoración geométrica con leve parallax */}
        <div className="absolute top-1/2 right-0 w-1/3 h-96 opacity-10 pointer-events-none hidden xl:block animate-parallax" aria-hidden="true">
          <div className="absolute inset-0 border-l border-t border-emerald-500/30 rounded-tl-[100px]" />
          <div className="absolute top-10 left-10 right-10 bottom-10 border-l border-t border-cyan-500/20 rounded-tl-[80px]" />
        </div>
      </header>

      {/* Sobre mí */}
      <section id="about" className="relative z-10 px-6 py-10 md:py-16 opacity-0 animate-fade-in-up [animation-delay:150ms]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex items-center gap-2 text-emerald-400">
            <FileText size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Sobre mí</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ing. Heber Iván Mejía Cabrera
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  <strong>HEBER IVÁN MEJÍA CABRERA</strong> obtuvo el grado de <strong>Bachiller en Ingeniería de Sistemas</strong> por la
                  <strong> Universidad Señor de Sipán</strong>, Chiclayo, Perú, en 2012, y el <strong>grado de Maestro en Ingeniería de Sistemas</strong>, con
                  especialización en <strong>Gestión de Tecnologías de la Información e Ingeniería de Software</strong>, por la
                  <strong> Universidad Nacional Pedro Ruiz Gallo</strong>, Lambayeque, Perú, en 2015. Asimismo, fue certificado como
                  investigador por <strong>CONCYTEC</strong> (RENACYT – Grupo María Rostworowski, Nivel I) durante el período 2020–2023.
                </p>
                <p>
                  Entre 2002 y 2014, desempeñó cargos en las áreas de sistemas y gestión de la producción en la <strong>RED Peruana Nuevo Tiempo</strong>.
                  Posteriormente, se desempeñó como <strong>Gerente General</strong> en <strong>IDEAT S.A.C.</strong> y es <strong>docente a tiempo completo</strong> en la
                  <strong> Universidad Señor de Sipán</strong> desde 2012.
                </p>
                <p>
                  Sus líneas de investigación se centran en la <strong>inteligencia artificial</strong>, el <strong>procesamiento digital de imágenes</strong> y los
                  <strong> sistemas agrícolas inteligentes</strong>. Sus trabajos recientes incluyen la aplicación de <strong>aprendizaje automático</strong> para la detección
                  de enfermedades en cultivos, la estimación de la producción frutícola y la clasificación de amenazas de <strong>ciberseguridad</strong> en redes <strong>IoT</strong>.
                </p>
                <p>
                  Ha publicado en revistas como <em>AgriEngineering</em>, <em>Informatics</em> e <em>ITECKNE</em>, y ha presentado sus investigaciones en múltiples conferencias
                  organizadas por <strong>SPIE</strong> y <strong>Springer</strong>. Ha recibido distinciones como el <strong>Best Poster Award</strong> en <strong>LACNEM 2015</strong>, y es beneficiario de
                  <strong> financiamiento de investigación de FONDECYT</strong> para el desarrollo tecnológico en el sector agrícola.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white mb-2">Contacto</div>
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
                  <Mail size={16} /> {email}
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white mb-2">Áreas de interés</div>
                <ul className="text-sm text-slate-400 list-disc pl-5 space-y-1">
                  <li>Inteligencia Artificial</li>
                  <li>Procesamiento Digital de Imágenes</li>
                  <li>Sistemas Agrícolas Inteligentes</li>
                  <li>ML aplicado a la agroindustria</li>
                  <li>Ciberseguridad en redes IoT</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <main id="projects" className="relative z-10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between opacity-0 animate-fade-in-up [animation-delay:150ms]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
                <Code2 size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">Proyectos Destacados</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Una colección curada de mis trabajos más recientes, desde aplicaciones web modernas hasta soluciones empresariales robustas.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-slate-950" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-slate-950" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-950" />
              </div>
              <span className="ml-2">Deploy en Vercel & Railway</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 120 + 200}ms` }}
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
                <div className="relative will-change-transform transition-transform duration-300 group-hover:-translate-y-1">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/80 backdrop-blur-xl mt-32 opacity-0 animate-fade-in-up [animation-delay:150ms]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
                  IM
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Ing Ivan Mejia</div>
                  <div className="text-xs text-slate-500">Full Stack Developer</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Apasionado por la tecnología y el desarrollo de soluciones innovadoras. Siempre aprendiendo, siempre creando.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navegación</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Sígueme</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                  <FileText size={16} />
                  <span>CV / Resume</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ing Ivan Mejia. Todos los derechos reservados.</p>
            <p className="text-xs text-slate-600">Diseñado y desarrollado con 💚 y React</p>
          </div>
        </div>
      </footer>

      {/* Animaciones globales */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowPan {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 4rem 4rem, 4rem 4rem; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(6px); }
        }
        @keyframes parallax {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        .animate-fade-in-up { animation: fadeInUp 0.7s ease-out forwards; }
        .animate-slow-pan { animation: slowPan 18s linear infinite; }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-parallax { animation: parallax 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 4.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Home;