"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconBrandLinkedin, IconArrowUpRight } from "@tabler/icons-react";
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
          "group flex flex-col sm:flex-row gap-6 p-6 border border-border hover:border-secondary/20 transition-all duration-500 bg-white",
          className
        )}
      >
        <div className="relative w-full sm:w-28 h-48 sm:h-28 shrink-0 overflow-hidden bg-[#F5F5F5]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-heading font-semibold text-primary text-lg leading-tight">
            {member.name}
          </p>
          <p className="font-body text-sm text-neutral-500 mt-1">
            {member.designation}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {member.specialization.map((s) => (
              <span
                key={s}
                className="text-xs font-body text-text-muted border border-border px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={cn("group relative overflow-hidden bg-white", className)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Portrait Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* LinkedIn button */}
        {member.linkedIn && (
          <Link
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-9 h-9 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary"
          >
            <IconBrandLinkedin size={18} className="text-primary hover:text-white" />
          </Link>
        )}

        {/* Hover info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="font-body text-xs text-white/70 leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 border border-t-0 border-border group-hover:border-secondary/20 transition-colors duration-500">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-heading font-semibold text-primary text-lg leading-tight">
              {member.name}
            </p>
            <p className="font-body text-sm text-neutral-500 mt-1">
              {member.designation}
            </p>
          </div>
          <span className="shrink-0 mt-1">
            <IconArrowUpRight
              size={18}
              className="text-border group-hover:text-white transition-colors duration-300"
            />
          </span>
        </div>

        <div
          className="my-4 h-px w-10 transition-all duration-500 group-hover:w-full"
          style={{ background: "linear-gradient(90deg, #111111, transparent)" }}
        />

        <div className="flex flex-wrap gap-1.5">
          {member.specialization.map((s) => (
            <span
              key={s}
              className="text-xs font-body text-text-muted border border-border px-2 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs text-text-muted font-body">
          {member.experience} Experience
        </p>
      </div>
    </motion.div>
  );
}
