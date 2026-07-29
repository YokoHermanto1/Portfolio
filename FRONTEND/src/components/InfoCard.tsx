import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";


type InfoCardProps = {
  icon: LucideIcon;
  value?: string;
  title: string;
  description: ReactNode;
};

function InfoCard({
  icon: Icon,
  value,
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-[28px] border border-(--border) bg-(--surface) p-8 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center text-center justify-center">
      
      {/* Container Ikon Lingkaran (Center Aligned) */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
        <Icon
          size={28}
          strokeWidth={1.6}
          className="text-(--text)"
        />
      </div>

      {/* Container Konten Teks */}
      <div className="flex flex-col items-center w-full">
        {value && (
          <h3 className="font-serif text-[44px] leading-none text-(--text)">
            {value}
          </h3>
        )}

        <h4 className={`${value ? "mt-2" : ""} font-serif text-[18px] text-(--text) font-medium`}>
          {title}
        </h4>

        {/* List / Deskripsi */}
        <div className="mt-3 text-sm leading-6 text-(--text) w-full flex flex-col items-center ">
          {description}
        </div>
      </div>

    </div>
  );
}

export default InfoCard;