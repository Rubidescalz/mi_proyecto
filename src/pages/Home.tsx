import React from "react";
  import ProjectCard from "../components/ProjectCard";
  import { projects } from "../data/projects";
  import { Code2 } from "lucide-react";

  const Home: React.FC = () => {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-400/20 selection:text-emerald-300">
        {/* Fondo decorativo sutil */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 animate-slow-pan" />
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px] animate-float" style={{ animationDuration: "10s" }} />
          <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px] animate-float" style={{ animationDuration: "12s", animationDelay: "2s" }} />
          <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px] animate-float" style={{ animationDuration: "14s", animationDelay: "4s" }} />
        </div>

        {/* Contenido principal: Proyectos */}
        <main id="projects" className="relative z-10 px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 md:mb-16 opacity-0 animate-fade-in-up [animation-delay:120ms]">
              <div className="inline-flex items-center gap-2 text-emerald-400 mb-3">
                <Code2 size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
                Proyectos
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                Selecciona e ingresa al proyecto de IA que quieres probar
              </p>
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

        {/* Animaciones globales locales a la página */}
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

          .animate-fade-in-up { animation: fadeInUp 0.7s ease-out forwards; }
          .animate-slow-pan { animation: slowPan 18s linear infinite; }
          .animate-float { animation: float 10s ease-in-out infinite; }
        `}</style>
      </div>
    );
  };

  export default Home;