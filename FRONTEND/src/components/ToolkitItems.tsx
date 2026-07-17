// Pindahkan semua import ikon ke sini
import {
  SiLaravel,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCodeigniter,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
  SiVuedotjs,
  SiQuasar,
  SiNeon,
  SiGitlab,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { HiOutlineUserGroup, HiOutlineLightBulb } from "react-icons/hi";
import { TbGitFork, TbChartBar } from "react-icons/tb";

interface ToolKitItemProps {
  name: string;
}

export function ToolkitItem({ name }: ToolKitItemProps) {
  // Fungsi untuk mencocokkan nama teknologi dengan ikon & warna Tailwind-nya
  const getIcon = (techName: string): React.ReactNode => {
    switch (techName) {
      // Development
      case "Laravel":
        return <SiLaravel className="text-[#FF2D20] text-lg" />;
      case "React":
        return <SiReact className="text-[#61DAFB] text-lg" />;
      case "TypeScript":
        return <SiTypescript className="text-[#3178C6] text-lg rounded-sm" />;
      case "JavaScript":
        return <SiJavascript className="text-[#F7DF1E] text-lg rounded-sm" />;
      case "CodeIgniter 4":
        return <SiCodeigniter className="text-[#DD4814] text-lg" />;
      case "Vue.js":
        return <SiVuedotjs className="text-[#4FC08D] text-lg" />;
      case "Quasar":
        return <SiQuasar className="text-[#1976D2] text-lg" />; // 🔵 Warna biru khas Quasar

      // Database
      case "PostgreSQL":
        return <SiPostgresql className="text-[#4169E1] text-lg" />;
      case "Firebase":
        return <SiFirebase className="text-[#FFCA28] text-lg" />;
      case "Neon":
        return <SiNeon className="text-[#00E599] text-lg" />;

      // Design
      case "Figma":
        return <SiFigma className="text-[#F24E1E] text-lg" />;

      // Tools
      case "Git":
        return <SiGit className="text-[#F05032] text-lg" />;
      case "GitHub":
        return <SiGithub className="text-neutral-800 text-lg" />;
      case "GitLab":
        return <SiGitlab className="text-[#FC6D26] text-lg" />;
      case "Docker":
        return <SiDocker className="text-[#2496ED] text-lg" />;
      case "Visual Studio Code":
        return <VscVscode className="text-[#007ACC] text-xl font-bold" />;

      // Methodology
      case "Human-Centered Design":
        return <HiOutlineUserGroup className="text-neutral-600 text-lg" />;
      case "Agile Scrum":
        return <TbGitFork className="text-neutral-600 text-lg" />;
      case "Product Thinking":
        return <HiOutlineLightBulb className="text-neutral-600 text-lg" />;
      case "Business Analysis":
        return <TbChartBar className="text-neutral-600 text-lg" />;

      // Default jika nama tidak cocok (biar gak error kosong)
      default:
        return <span className="text-xs">📦</span>;
    }
  };
  return (
    <li className="flex items-center gap-3 text-neutral-700 font-serif text-sm font-medium group cursor-default">
      <div className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md group-hover:scale-105">
        {getIcon(name)}
      </div>
      <span className="transition-colors duration-300 group-hover:text-black">
        {name}
      </span>
    </li>
  );
}
