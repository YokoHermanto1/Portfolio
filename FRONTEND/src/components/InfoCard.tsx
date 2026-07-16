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
    <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center justify-center">
      
      {/* Container Ikon Lingkaran (Center Aligned) */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-neutral-100 mb-4">
        <Icon
          size={28}
          strokeWidth={1.6}
          className="text-slate-600"
        />
      </div>

      {/* Container Konten Teks */}
      <div className="flex flex-col items-center w-full">
        {value && (
          <h3 className="font-serif text-[44px] leading-none text-neutral-950">
            {value}
          </h3>
        )}

        <h4 className={`${value ? "mt-2" : "mt-0"} font-serif text-[18px] text-neutral-900 font-medium`}>
          {title}
        </h4>

        {/* List / Deskripsi */}
        <div className="mt-3 text-sm leading-6 text-neutral-500 w-full flex flex-col items-center">
          {description}
        </div>
      </div>

    </div>
  );
}

export default InfoCard;