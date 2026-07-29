import InfoCard from "../components/InfoCard";

import { TrendingUp, BriefcaseBusiness } from "lucide-react";

function Background() {
  // const disciplines = [
  //   "Business Analysis",
  //   "UI/UX Design",
  //   "Full-Stack Development",
  //   "Product Thinking",
  // ];

  const works = ["Research", "Design", "Development"];

  return (
    <section id="Background" className="font-serif pb-15 md:px-10 text-left ">
      <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0 px-4 space-y-12">
        {/* ================= HEADER SECTION ================= */}
        <div className="border-b pb-6 border-(--border) ">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Kelompok Judul & Angka Aksen */}
            <div className="flex items-baseline gap-4">
              <span className="font-sans text-xl font-medium tracking-widest select-none text-(--section-number)">
                01 /
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-(--text)">
                Background
              </h2>
            </div>

            {/* Deskripsi Singkat/Sub-headline di Sisi Kanan Header */}
            <p className="text-sm text-(--text) sm:max-w-none md:max-w-xs sm:text-right leading-relaxed font-serif">
              A brief overview of my professional philosophy and core
              cross-functional disciplines.
            </p>
          </div>
        </div>

        {/* ================= CONTENT SECTION (Grid Konten & InfoCard) ================= */}
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
          {/* Kolom Teks Utama */}
          <div className="max-w-4xl">
            {/* Heading */}
            <h3 className="font-serif text-[30px] leading-tight tracking-[-0.02em] text-(--text)">
              I build software by understanding the problem before choosing the
              technology.
            </h3>

            {/* Intro */}
            <p className="mt-8 text-base leading-[1.9] font-serif text-(--text)">
              Whether I'm designing the interface or exploring how the backend
              supports it, I like understanding how each layer connects it helps
              me design experiences that are grounded in how the system actually
              works, not just how it looks.
            </p>

            <hr className="my-6 border-(--border)" />

            {/* Paragraph 2 */}
            <p className="text-base leading-[1.9] text-(--text)">
              My thesis project, UlasKatering, brought design and development
              together. I led the UI/UX process end-to-end research,
              wireframing, and prototyping in Figma and built the frontend
              interface using Vue.js based on that design system. I also
              supported backend and database integration (CodeIgniter,
              PostgreSQL) through AI-assisted development. Through usability
              testing, the platform achieved a 75.2 System Usability Scale (SUS)
              score, with 75% of participating SMEs reporting improved
              promotional reach and 71.4% of users finding catering services
              more easily.
            </p>

            <hr className="my-6 border-(--border)" />

            {/* Paragraph 3 */}
            <p className="text-base leading-[1.9] text-(--text)">
              AI is part of how I work. I use it to accelerate research,
              prototyping, and backend exploration, which lets me focus more of
              my energy on the design decisions and user-experience details that
              need a human eye. This portfolio itself, built with React,
              Tailwind CSS, and a Laravel backend, reflects that same approach:
              building real, working products while continuing to grow my
              independent development skills.
            </p>
          </div>

          {/* Kolom Kanan: Info Cards */}
          <div className="space-y-6">
            <InfoCard
              icon={TrendingUp}
              value="75.2"
              title="SUS Score"
              description="(System Usability Scale)"
            />

            <InfoCard
              icon={BriefcaseBusiness}
              title="Cross Functional"
              description={
                <div className="space-y-1 font-serif">
                  {works.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;


