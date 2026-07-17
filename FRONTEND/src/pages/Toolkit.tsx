function Toolkit() {
  const toolkitData = [
    {
      category: "Development",
      items: [
        {
          name: "React",
          desc: "Building dynamic and interactive modern user interfaces.",
        },
        {
          name: "Vue.js & Quasar",
          desc: "Crafting cross-platform apps with high performance.",
        },
        {
          name: "TypeScript",
          desc: "Ensuring type-safety and scalable codebase structure.",
        },
        {
          name: "JavaScript",
          desc: "Core language powering modern web applications.",
        },
        {
          name: "Laravel",
          desc: "Robust and feature-rich backend development.",
        },
        {
          name: "CodeIgniter 4",
          desc: "Lightweight and high-performance MVC routing.",
        },
      ],
    },
    {
      category: "Database Architecture",
      items: [
        {
          name: "Neon",
          desc: "Serverless PostgreSQL for modern cloud workflows.",
        },
        {
          name: "Firebase",
          desc: "Realtime data sync and flexible NoSQL storage.",
        },
        {
          name: "PostgreSQL",
          desc: "Advanced and reliable relational data structures.",
        },
      ],
    },
    {
      category: "Tools & Ecosystem",
      items: [
        {
          name: "Git & Version Control",
          desc: "Managing clean code history and collaborations.",
        },
        {
          name: "GitHub & GitLab",
          desc: "Automating CI/CD and hosting repositories.",
        },
        {
          name: "Docker",
          desc: "Containerizing software for consistent environments.",
        },
        {
          name: "VS Code",
          desc: "Primary IDE optimized for rapid development.",
        },
      ],
    },
    {
      category: "Process",
      items: [
        {
          name: "Agile Scrum",
          desc: "Iterative development cycles focused on rapid delivery.",
        },
        {
          name: "Product Thinking",
          desc: "Bridging the gap between user needs and business objectives.",
        },
        {
          name: "Business Analysis",
          desc: "Data-driven decision making to ensure technical alignment.",
        },
        {
          name: "Human-Centered Design",
          desc: "Prioritizing the end-user experience throughout the lifecycle.",
        },
      ],
    },
  ];
  return (
    <section id="Toolkit" className="font-serif pb-15 md:px-10 text-left">
      <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0 px-4 space-y-12">
        {/* ================== Header Section ====================== */}
        <div className="border-b border-neutral-200 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Kelompok Judul & Angka Aksen */}
            <div className="flex items-baseline gap-4">
              <span className="font-sans text-xl font-medium tracking-widest text-neutral-400 select-none">
                03 /
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-900">
                Toolkit
              </h2>
            </div>
            <p className="text-sm text-neutral-500 sm:max-w-none md:max-w-xs sm:text-right leading-relaxed font-serif">
              A collection of tools, frameworks, and practices that help me turn
              ideas into impactful products.
            </p>
          </div>
        </div>

        {/* ================== GRID UTAMA (KUNCI RESPONSIVE) ====================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-left">
          {toolkitData.map((section, idx) => (
            <div
              key={section.category}
              className={`flex flex-col space-y-6 w-full items-start 
            ${idx !== 0 ? "lg:border-l lg:border-neutral-200 lg:pl-6" : ""}`}
            >
              <div className="w-full border-b border-neutral-200 pb-2 text-left ">
                <span className="text-2xl font-serif text-neutral-900 font-normal block text-center">
                  {section.category}
                </span>
              </div>

              <div className="space-y-5 w-full">
                {section.items.map((item, itemIdx) => {
                  // Membuat format angka index jadi dua digit (01, 02, dst)
                  const itemNumber = String(itemIdx + 1).padStart(2, "0");

                  return (
                    <div
                      key={item.name}
                      className="flex flex-col space-y-1 group"
                    >
                      <div className="flex items-baseline gap-3">
                        {/* Nomor Urut Tipis / Muted */}
                        <span className="font-sans text-sm font-medium text-neutral-400 select-none">
                          {itemNumber}
                        </span>
                        {/* Nama Teknologi */}
                        <span className="font-sans text-sm font-bold tracking-wider uppercase text-neutral-800 transition-colors group-hover:text-black">
                          {item.name}
                        </span>
                      </div>
                      {/* Deskripsi Singkat */}
                      <p className="pl-6 text-sm font-serif text-neutral-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
