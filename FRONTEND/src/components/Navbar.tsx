import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuNavbar = [
    { id: "Background", title: "Background", href: "#Background" },
    { id: "projects", title: "Projects", href: "#Projects" },
    { id: "toolkit", title: "Toolkit", href: "#ToolkitItems" },
    { id: "contact", title: "Contact", href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md border-white/20 bg-white/20 transition-all duration-300 border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1
          className={`text-xl font-bold font-serif transition-all dutration-300  ${
            isScrolled ? "text-sm opacity-40" : "text-xl opacity-100"
          }`} 
        >
          <a href="#Hero">PORTFOLIO</a>
        </h1>
        <ul className="flex gap-20 text-base font-serif">
          {menuNavbar.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="hover:text-amber-500">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
