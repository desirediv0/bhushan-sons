import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
  variant?: "portrait" | "horizontal";
}

export function TeamCard({
  member,
  className,
  variant = "portrait",
}: TeamCardProps) {
  if (variant === "horizontal") {
    return (
      <div
        className={cn(
          "flex flex-col sm:flex-row gap-5 p-5 border border-border bg-white",
          className
        )}
      >
        <div className="relative w-full sm:w-28 h-48 sm:h-28 shrink-0 overflow-hidden bg-background-alt">
          <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-heading font-medium text-text text-[1.05rem] leading-tight">
            {member.name}
          </p>
          <p className="font-body text-[10.5px] font-semibold tracking-[0.16em] uppercase text-secondary mt-1.5">
            {member.designation}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {member.specialization.map((s) => (
              <span key={s} className="text-[11px] font-body text-text-muted border border-border rounded-full px-2.5 py-0.5">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={cn("bg-white border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-navy", className)}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1.12" }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 hover:scale-[1.045]"
        />
        <span className="absolute left-0 bottom-0 bg-primary text-white text-[10.5px] font-semibold tracking-[0.14em] uppercase font-body px-3.5 py-2">
          {member.experience}
        </span>
      </div>

      <div className="px-5 pt-5 pb-6">
        <h3 className="font-heading font-medium text-text text-[1.14rem] mb-1">
          {member.name}
        </h3>
        <p className="font-body text-[10.5px] font-semibold tracking-[0.16em] uppercase text-secondary mb-3">
          {member.designation}
        </p>
        <p className="font-body text-[13.7px] text-text-muted leading-relaxed mb-3 line-clamp-3">
          {member.bio}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {member.specialization.map((s) => (
            <span key={s} className="text-[11px] font-body text-text-muted border border-border rounded-full px-2.5 py-0.5">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
