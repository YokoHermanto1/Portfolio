import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // State untuk menentukan navbar muncul/sembunyi
  const [isOpen, setIsOpen] = useState(false); // Kontrol menu mobile

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Jika scroll ke bawah dan sudah melewati 50px, SEMBUNYIKAN navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // 2. Jika scroll ke atas, MUNCULKAN navbar kembali
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuNavbar = [
    { id: "background", title: "Background", href: "#Background" },
    { id: "projects", title: "Projects", href: "#Projects" },
    { id: "toolkit", title: "Toolkit", href: "#Toolkit" },
    { id: "contact", title: "Contact", href: "#Contact" },
  ];

  return (
    <>
      {/* 1. NAVBAR UTAMA */}
      {/* Menggunakan bg-white solid. Efek hilang memakai kombinasi translate-y dan opacity agar transisinya mulus */}
      <nav
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-neutral-200
          bg-white/90
          backdrop-blur-md
          shadow-sm
          transition-all
          duration-300
          dark:border-neutral-800
          dark:bg-neutral-950/90
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          {/* LOGO */}
          <h1
            className="font-serif
              text-xl
              font-bold
              text-neutral-900
              dark:text-neutral-100"
          >
            <a href="#Hero">PORTFOLIO</a>
          </h1>

          {/* DESKTOP MENU */}
          <ul
            className="hidden
                gap-20
                font-serif
                text-base
                text-neutral-800
                md:flex
                dark:text-neutral-200
"
          >
            {menuNavbar.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="transition-color hover:text-amber-500 "
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="
              rounded-lg
              p-2
              transition-colors
              hover:bg-neutral-100
              dark:hover:bg-neutral-900
              md:hidden
            "
          >
            <Menu className="size-6 text-neutral-900 dark:text-neutral-100" />
          </button>
        </div>
      </nav>

      {/* 🛠️ 2. HALAMAN MENU FULLSCREEN (Khusus Mobile dengan Efek Fade Mulus) */}
      <div
        className={`    
          fixed
          inset-0
          z-50
          flex
          flex-col
          bg-white
          dark:bg-neutral-950
          transition-all
          duration-300
          ease-in-out
          md:hidden
      ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
      >
        <div className="    
                flex
                items-center
                justify-between
                border-b
                border-neutral-200
                px-8
                py-6
                dark:border-neutral-800">
          <h1 className="    
                font-serif
                text-xl
                font-bold
                text-neutral-900
                dark:text-neutral-100">
            <a href="#Hero" onClick={() => setIsOpen(false)}>
              PORTFOLIO
            </a>
          </h1>
          {/* CLose */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="
              rounded-lg
              p-2
              transition-colors
              hover:bg-neutral-100
              dark:hover:bg-neutral-900
            "
          >
            <X className="size-6 text-neutral-900 dark:text-neutral-100" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <ul className="    
                flex
                flex-col
                space-y-10

                text-center
                text-2xl
                font-serif

                text-neutral-900
                dark:text-neutral-100">
            {menuNavbar.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="  
                    block
                    py-2
                    transition-colors
                    hover:text-amber-500"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
