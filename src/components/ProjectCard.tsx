import React from "react";
  import type { Project } from "../data/projects";
  import { ArrowUpRight } from "lucide-react";

  type Props = {
    project: Project;
  };

  const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
      <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        {/* Imagen de portada (opcional) */}
        {project.image ? (
          <div className="relative w-full overflow-hidden rounded-t-2xl">
            {/* Contenedor 16:9 */}
            <div className="aspect-[16/9] w-full">
              <img
                src={project.image}
                alt={project.imageAlt ?? project.title}
                className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay de gradiente sutil para legibilidad */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>
        ) : null}

        {/* Contenido */}
        <div className="relative p-5 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4">{project.description}</p>

          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            {project.tech && (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                {project.tech}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-950 shadow shadow-white/10 transition-all hover:shadow-md hover:shadow-white/20"
              >
                Ver demo
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors"
              >
                Código
              </a>
            )}
          </div>
        </div>

        {/* Highlight on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
             style={{ background: "linear-gradient(90deg, rgba(16,185,129,0.12), rgba(34,211,238,0.12), rgba(59,130,246,0.12))" }} />
      </article>
    );
  };

  export default ProjectCard;