import { FaStarOfLife } from "react-icons/fa6";

function Contact() {
  const contact = [
    {
      id: "01",
      label: "EMAIL",
      value: "yokohermanto@gmail.com",
      href: "mailto:    yokohermanto@gmail.com",
    },
    {
      id: "02",
      label: "LINKEDIN",
      value: "https://www.linkedin.com/in/yoko-hermanto/",
      href: "https://www.linkedin.com/in/yoko-hermanto/",
    },
    {
      id: "03",
      label: "GITHUB",
      value: "https://github.com/YokoHermanto1",
      href: "https://github.com/YokoHermanto1",
    },
    {
      id: "04",
      label: "RESUME",
      value: "Download CV (PDF)",
      href: "/document/Frontend_Developer.pdf",
    },
    {
      id: "05",
      label: "LOCATION",
      value: "Jakarta, Indonesia",
    },
  ];
  return (
    <section id="Contact" className="font-serif md:px-10 pt-4 text-left">
      <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0 px-4 space-y-12">
        {/* =============== Header =========================== */}
        <div className="border-b border-(--border) pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Kelompok Judul & Angka Aksen */}
            <div className="flex items-baseline gap-4">
              <span className="font-sans text-xl font-medium tracking-widest text-(--section-number) select-none">
                04 /
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-normal text-(--text)">
                Contact
              </h2>
            </div>
            {/* Deskripsi Singkat/Sub-headline di Sisi Kanan Header */}
            <p className="text-sm text-(--text) sm:max-w-none md:max-w-xs sm:text-right leading-relaxed font-serif">
              Where purposeful design meets scalable execution. Reaching out is
              the first step.
            </p>
          </div>
        </div>
        {/* ================= CONTENT SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 font-serif">
          <div className="flex flex-col justify-center">
            <p className="text-5xl sm:text-6xl lg:text-6xl font-serif text-(--text) leading-[1.1] tracking-tight text-center lg:text-left">
              Let's build something meaningful together.
            </p>
          </div>
          {/* ➡️ KOLOM KANAN: Susunan Baru (Links di Atas, Status di Bawah) */}
          <div className="flex flex-col space-y-12 md:pl-16 md:border-l border-(--border)">
            {/* 1. Mapped List Contact */}
            <div className="flex flex-col border-b border-(--border)">
              {contact.map((item) => {
                // Check jika item saat ini adalah LOCATION
                const isLocation = item.label === "LOCATION";
                const isResume = item.label === "RESUME";
                if (isLocation) {
                  return (
                    // Menggunakan <div> biasa tanpa interaksi pointer / hover link
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-6 border-b border-(--border) select-text"
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="text-xs font-sans text-(--section-number) select-none">
                          {item.id}
                        </span>
                        <div>
                          <span className="block text-xs font-bold font-serif tracking-widest text-(--text) uppercase">
                            {item.label}
                          </span>
                          {/* Teks biasa tanpa efek underline */}
                          <span className="text-sm font-serif text-(--text)">
                            {item.value}
                          </span>
                        </div>
                      </div>
                      {/* Sengaja dikosongkan agar tidak ada tanda panah */}
                    </div>
                  );
                }

                // Render normal untuk item yang merupakan sebuah LINK (Email, Github, dll)
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={!isResume ? "_blank" : undefined}
                    rel={!isResume ? "noopener noreferrer" : undefined}
                    download={isResume ? "CV_Yoko_Hermanto.pdf" : undefined}
                    className="flex items-center justify-between py-6 border-b border-(--border) group transition-colors"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-xs font-sans text-(--section-number) select-none transition-colors duration-300 group-hover:text-(--text)">
                        {item.id}
                      </span>
                      <div>
                        <span className="block text-xs font-bold font-serif tracking-widest text-(--text) uppercase">
                          {item.label}
                        </span>
                        <span className="contact-link text-sm font-serif hover-(--surface-hover) transition-colors decoration-neutral-300 underline-offset-4 text-(--text) dark:decoration-neutral-700 ">
                          {item.value}
                        </span>
                      </div>
                    </div>
                    <span className="text-xl transition-all group-hover:translate-x-1 group-hover-(--surface-hover) group-hover:-translate-y-0.5 duration-300 ease-out font-serif text-(--text)">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>

            {/* 2. Status Open To (Sekarang di bawah link, menggantikan text paragraf lama) */}
            <div className="space-y-3 flex flex-col items-center lg:items-start text-center lg:text-left ">
              <div className="flex items-center gap-2">
                <FaStarOfLife className="text-[10px] text-(--text) animate-spin-[spin_8s_linear_infinite]"></FaStarOfLife>
                <p className="text-sm italic font-serif text-(--text)">
                  Currently open to
                </p>
              </div>
              <ul className="text-xs font-serif font-bold tracking-widest text-(--text) uppercase space-y-1.5 border-(--border) pb-4 w-56">
                <li>Frontend Developer</li>
                <li>Fullstack Developer</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= 3. INTEGRATED FOOTER SECTION ================= */}
        {/* Garis horizontal memisahkan konten atas dengan footer */}
        <div className="border-t border-(--border) py-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 text-center lg:text-left">
          {/* ⬅️ FOOTER KIRI: Closing Statement */}
          <div className="flex flex-col justify-center space-y-1">
            <p className="text-lg sm:text-xl text-(--text) font-normal ">
              Thanks for stopping by.
            </p>
            <p className="text-lg sm:text-xl italic text-(--text)">
              I look forward to hearing from you.
            </p>
          </div>

          {/* ➡️ FOOTER KANAN: Credits & Copyright */}
          {/* md:border-l otomatis bikin garis vertikalnya sejajar lurus dari atas ke bawah */}
          <div className="flex flex-col space-y-1 md:pl-16 md:border-l border-(--border) justify-center text-center lg:text-right">
            <p className="text-xs sm:text-sm italic text-(--text)">
              Designed & Developed by
            </p>
            <p className="text-base text-(--text) font-normal tracking-wide">
              Yoko Hermanto
            </p>
            <p className="text-xs text-(--text) font-serif select-none ">
              © 2026 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
