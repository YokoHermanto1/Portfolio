import { ToolkitItem } from "../components/ToolkitItems";

function Toolkit() {
  const toolkitData = [
    {
      category: "Development",
      items: [
        "React",
        "Vue.js",
        "Quasar",
        "TypeScript",
        "JavaScript",
        "Laravel",
        "CodeIgniter 4",
      ],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "Firebase", "Neon"],
    },
    {
      category: "Design",
      items: ["Figma"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub","GitLab", "Docker", "Visual Studio Code"],
    },
    {
      category: "Methodology",
      items: [
        "Human-Centered Design",
        "Agile Scrum",
        "Product Thinking",
        "Business Analysis",
      ],
    },
  ];
  return (
    <section
      id="Toolkit"
      className="font-serif pb-15 md:px-10 text-center md:text-left"
    >
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 pt-6">
          {toolkitData.map((section, idx) => (
            <div
              key={section.category}
              className={`flex flex-col space-y-6 w-full items-center sm:items-start
            ${idx !== 0 ? "lg:border-l lg:border-neutral-200 lg:pl-6" : ""}`}
            >
              <div className="w-full border-b border-neutral-200 pb-3 text-center sm:text-left">
                <span className="text-2xl font-serif text-neutral-900 font-normal block">
                  {section.category}
                </span>
              </div>
              <ul className="space-y-4 w-full flex flex-col items-center sm:items-start">
                {section.items.map((itemName) => (
                  /* 🛠️ Cuma perlu kirim nama teksnya aja sekarang! */
                  <ToolkitItem key={itemName} name={itemName} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
