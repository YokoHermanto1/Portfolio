// import { useState, useEffect } from "react";

// interface ProjectType {
//   id: number;
//   category: string;
//   title: string;
//   start_year: number;
//   description: string;
//   role: string;
//   tech: string[];
//   image: string | null;
//   link_url: string;
//   end_year: number;
// }

// function Projects() {
//   const [projectList, setProjectList] = useState<ProjectType[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // 1. Ambil data dari API Laravel saat komponen pertama kali dimuat
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/projects") // Mengarah ke server Laravel kamu
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Gagal mengambil data dari API");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProjectList(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching projects:", err);
//         setLoading(false);
//       });
//   }, []);

//   // 2. Tampilkan efek loading sederhana saat data masih di-fetch
//   if (loading) {
//     return (
//       <div className="text-center py-20 font-serif text-neutral-500">
//         Loading projects from database...
//       </div>
//     );
//   }

//   return (
//     <section id="Projects" className="font-serif pb-15 md:px-10">
//       <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-0 ">
//         <div className="border-b border-neutral-200 pb-6">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
//             {/* Kelompok Judul & Angka Aksen */}
//             <div className="flex items-baseline gap-4">
//               <span className="font-serif text-xl font-medium tracking-widest text-neutral-400">
//                 02 /
//               </span>
//               <h2 className="text-4xl sm:text-5xl font-normal text-neutral-900">
//                 Projects
//               </h2>
//             </div>

//             {/* Deskripsi Rapat Kanan */}
//             <p className="text-sm text-neutral-500 max-w-sm sm:text-right leading-relaxed font-serif text-center">
//               A collection of products I have designed and built through
//               academic programs, courses, and independent work.
//             </p>
//           </div>
//         </div>

//         {/* ================== Project Field ====================== */}
//         <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0">
//           {/* 1. ID & Gambar Project */}
//           <div className="divide-y divide-neutral-200">
//             {projectList.map((project) => (
//               <div
//                 key={project.id}
//                 className="py-12 grid gap-5 lg:grid-cols-[320px_1fr_360px] items-start group hover:bg-neutral-50/50 transition-colors duration-300 rounded-xl px-2 -mx-2"
//               >
//                 <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 aspect-video">
//                   <a
//                     href={project.link_url}
//                     target="blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       src={
//                         project.image ||
//                         "https://via.placeholder.com/640x360?text=No+Image"
//                       }
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </a>
//                 </div>
//                 {/* 2. Informasi Utama Project */}
//                 <div className="space-y-4 lg:pl-8 h-full min-h-20 ">
//                   <div className="flex justify-between uppercase tracking-[0.35em] text-[11px] text-neutral-400 font-serif">
//                     <span>{project.category}</span>
//                     <span className="font-sans">
//                       {" "}
//                       {project.start_year}{" "}
//                       {project.end_year ? `- ${project.end_year}` : ""}
//                     </span>
//                   </div>
//                   <h3 className="text-3xl  text-black">{project.title}</h3>
//                   <p className="text-sm leading-relaxed text-neutral-600 font-serif">
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* 3. Peran & Tech Stack (Sisi Kanan) */}
//                 <div className=" lg:border-l border-neutral-300 lg:pl-8 w-full grid grid-rows-[auto_1fr] gap-6 self-stretch">
//                   <div className="space-y-1.5 lg:pl-0">
//                     <span className="text-xs tracking-widest uppercase text-neutral-400 font-serif block">
//                       My Role
//                     </span>
//                     <p className="text-sm font-serif text-neutral-700 leading-relaxed">
//                       {project.role}
//                     </p>
//                   </div>

//                   {/* Tech Tags */}
//                   <div className="space-y-2.5 self-start lg:pl-0">
//                     <span className="text-xs uppercase tracking-widest text-neutral-400 font-serif block">
//                       Tech Stack
//                     </span>
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {project.tech.map((t) => (
//                         <span
//                           key={t}
//                           className="px-3 py-1 text-xs rounded-full border border-neutral-300 text-neutral-600 font-serif"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

interface ProjectType {
  id: number;
  category: string;
  title: string;
  start_year: number;
  end_year: number | null;
  description: string;
  role: string;
  tech: string[];
  image: string | null;
  link_url: string;
}

function Projects() {
  // Data proyek kamu dipindah ke sini (Static / Hardcoded)
  const projectList: ProjectType[] = [
    {
      id: 1,
      category: "THESIS",
      title: "UlasKatering",
      start_year: 2025,
      end_year: null,
      description:
        "A web platform to help users find and review UMKM catering services with a Human Centered Design approach. Built from research to deployment with full-stack technologies.",
      role: "Research · UI/UX Design · Full Stack Development · Product Thinking",
      tech: ["Vue.js", "CodeIgniter 4", "PostgreSQL", "Docker", "Figma"],
      image: "/project_images/ulaskatering.png",
      link_url:
        "https://app.notion.com/p/yokohermanto/UlasKatering-343a399a25718010be75eda14a3b599c?source=copy_link",
    },
    {
      id: 2,
      category: "BINUS ENTREPRENEURSHIP PROGRAM",
      title: "GoCater",
      start_year: 2024,
      end_year: 2025,
      description:
        "A digital platform connecting customers with local catering businesses by simplifying the search and ordering experience while supporting SMEs in expanding their online presence.",
      role: "Research · UI/UX Design · Product Development · Product Thinking",
      tech: [
        "CSS",
        "HTML",
        "Javascript",
        "Firebase",
        "Java",
        "Figma",
        "Android Studio",
      ],
      image: "/project_images/GoCaterLandingPage.png",
      link_url:
        "https://app.notion.com/p/yokohermanto/GoCater-350a399a257180bda9b3e6ed31012c26?source=copy_link",
    },
    {
      id: 3,
      category: "PROJECT BASED LEARNING",
      title: "WorkFitAI",
      start_year: 2025,
      end_year: null,
      description:
        "Designed a mobile application that helps users achieve their fitness goals through AI-powered personalized workout recommendations and an intuitive user experience.",
      role: "UI/UX Design",
      tech: ["Figma"],
      image: "/project_images/WorkFitAI.png",
      link_url:
        "https://app.notion.com/p/yokohermanto/WorkFitAI-33aa399a257180f284a6c8b9fd534c46?source=copy_link",
    },
  ];

  return (
    <section id="Projects" className="font-serif pb-15 md:px-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-0 ">
        <div className="border-b border-neutral-200 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Kelompok Judul & Angka Aksen */}
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-xl font-medium tracking-widest text-neutral-400">
                02 /
              </span>
              <h2 className="text-4xl sm:text-5xl font-normal text-neutral-900">
                Projects
              </h2>
            </div>

            {/* Deskripsi Rapat Kanan */}
            <p className="text-sm text-neutral-500 max-w-sm sm:text-right leading-relaxed font-serif text-center">
              A collection of products I have designed and built through
              academic programs, courses, and independent work.
            </p>
          </div>
        </div>

        {/* ================== Project Field ====================== */}
        <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0">
          {/* 1. ID & Gambar Project */}
          <div className="divide-y divide-neutral-200">
            {projectList.map((project) => (
              <div
                key={project.id}
                className="py-12 grid gap-5 lg:grid-cols-[320px_1fr_360px] items-start group hover:bg-neutral-50/50 transition-colors duration-300 rounded-xl px-2 -mx-2"
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 aspect-video">
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
                  <div className="flex justify-between uppercase tracking-[0.35em] text-[11px] text-neutral-400 font-serif">
                    <span>{project.category}</span>
                    <span className="font-sans">
                      {" "}
                      {project.start_year}{" "}
                      {project.end_year ? `- ${project.end_year}` : ""}
                    </span>
                  </div>
                  <h3 className="text-3xl  text-black">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600 font-serif">
                    {project.description}
                  </p>
                </div>

                {/* 3. Peran & Tech Stack (Sisi Kanan) */}
                <div className=" lg:border-l border-neutral-300 lg:pl-8 w-full grid grid-rows-[auto_1fr] gap-6 self-stretch">
                  <div className="space-y-1.5 lg:pl-0">
                    <span className="text-xs tracking-widest uppercase text-neutral-400 font-serif block">
                      My Role
                    </span>
                    <p className="text-sm font-serif text-neutral-700 leading-relaxed">
                      {project.role}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-2.5 self-start lg:pl-0">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-serif block">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full border border-neutral-300 text-neutral-600 font-serif"
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