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
    <section id="Background" className="font-serif pb-20 md:px-10">
      <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0 px-4 space-y-12">
        {/* ================= HEADER SECTION ================= */}
        <div className="border-b border-neutral-200 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Kelompok Judul & Angka Aksen */}
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-xl font-medium tracking-widest text-neutral-400 select-none">
                01 /
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-900">
                Background
              </h2>
            </div>

            {/* Deskripsi Singkat/Sub-headline di Sisi Kanan Header */}
            <p className="text-sm text-neutral-500 max-w-xs sm:text-right leading-relaxed font-serif">
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
            <h3 className="font-serif text-[30px] leading-tight tracking-[-0.02em] text-neutral-900">
              I build software by understanding the problem before choosing the
              technology.
            </h3>

            {/* Intro */}
            <p className="mt-8 text-base leading-[1.9] text-neutral-700 font-serif">
              Whether I'm designing the interface, modeling the database, or
              building the API, I like seeing how every layer fits together.
              This comprehensive view allows me to bridge the gap between design
              and engineering, ensuring that the final application is as
              scalable in the backend as it is intuitive for the user.
            </p>

            <hr className="my-6 border-neutral-200" />

            {/* Paragraph 2 */}
            <p className="text-base leading-[1.9] text-neutral-700 font-serif">
              My thesis project, UlasKatering, brought those disciplines
              together. I independently researched, designed, and developed the
              platform from Figma designs and database modeling to a CodeIgniter
              backend, Quasar frontend, and PostgreSQL database. Through
              usability testing, it achieved a 75.2 System Usability Scale (SUS)
              score, with 75% of participating SMEs reporting improved
              promotional reach and 71.4% of users finding catering services
              more easily.
            </p>

            <hr className="my-6 border-neutral-200" />

            {/* Paragraph 3 */}
            <p className="text-base leading-[1.9] text-neutral-700 font-serif">
              To maintain this end-to-end ownership efficiently, I integrate AI
              into my daily workflow as a force multiplier. Leveraging AI to
              accelerate technical research, prototyping, and debugging allows
              me to focus my energy on what matters most: robust system
              architecture, database scalability, and seamless user experience.
              By offloading repetitive tasks, I balance modern automation with
              human engineering intuition to refine complex business logic and
              ensure code quality at pace. This portfolio built with Laravel,
              React, TypeScript, and PostgreSQL reflects that highly efficient
              approach.
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
