import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface ProjectType {
  id: number;
  category: string;
  title: string;
  start_year: number;
  end_year: number;
  description: string;
  role: string;
  tech: string[];
  image: string | null;
  link_url: string;
  order_index: number;
}

function Projects() {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setProjectList(data ?? []);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  // 2. Tampilkan efek loading sederhana saat data masih di-fetch
  if (loading) {
    return (
      <div className="text-center py-20 font-serif text-neutral-500">
        Loading projects from database...
      </div>
    );
  }

  return (
    <section
      id="Projects"
      className="font-serif pb-3 md:px-10 bg-(--bg) transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-0 ">
        <div className="border-b border-(--border) pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Kelompok Judul & Angka Aksen */}
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-xl font-medium tracking-widest text-(--section-number)">
                02 /
              </span>
              <h2 className="text-4xl sm:text-5xl font-normal text-(--text)">
                Projects
              </h2>
            </div>

            {/* Deskripsi Rapat Kanan */}
            <p className="text-sm text-(--text)  max-w-sm sm:text-right leading-relaxed font-serif ">
              A collection of products I have designed and built through
              academic programs, courses, and independent work.
            </p>
          </div>
        </div>

        {/* ================== Project Field ====================== */}
        <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0">
          {/* 1. ID & Gambar Project */}
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {projectList.map((project) => (
              <div
                key={project.id}
                className="py-12 grid gap-5 lg:grid-cols-[320px_1fr_360px] items-start group horver-(--surface-hover) transition-colors duration-300 rounded-xl px-2 -mx-2"
              >
                <div className="overflow-hidden rounded-2xl border border-(--border) bg-(--bg) aspect-video">
                  <a
                    href={project.link_url}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        project.image ||
                        "https://via.placeholder.com/640x360?text=No+Image"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                </div>
                {/* 2. Informasi Utama Project */}
                <div className="space-y-4 lg:pl-8 h-full min-h-20 ">
                  <div className="flex justify-between uppercase tracking-[0.35em] text-[11px] text-(--text) font-serif">
                    <span>{project.category}</span>
                    <span className="font-sans">
                      {project.start_year && project.end_year
                        ? `${project.start_year} - ${project.end_year}`
                        : (project.start_year ?? "")}
                    </span>
                  </div>
                  <h3 className="text-3xl  text-(--text)">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-(--text) font-serif">
                    {project.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={project.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-wider uppercase ttext-(--text) hover-(--surface-hover) border-b border-(--border) pb-0.5 transition-all duration-300"
                    >
                      View Case Study{" "}
                      <span className="text-[10px] select-none">↗</span>
                    </a>
                  </div>
                </div>

                {/* 3. Peran & Tech Stack (Sisi Kanan) */}
                <div className=" lg:border-l border-(--border) lg:pl-8 w-full grid grid-rows-[auto_1fr] gap-6 self-stretch">
                  <div className="space-y-1.5 lg:pl-0">
                    <span className="text-xs tracking-widest uppercase text-(--text) font-serif block">
                      My Role
                    </span>
                    <p className="text-sm font-serif text-(--text) leading-relaxed">
                      {project.role}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-2.5 self-start lg:pl-0">
                    <span className="text-xs uppercase tracking-widest text-(--text) font-serif block">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full border border-(--border) text-(--text) font-serif"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
