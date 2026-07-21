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
          "group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-border hover:border-violet-300 hover:shadow-card-hover transition-all duration-500 bg-white",
          className
        )}
      >
        <div className="relative w-full sm:w-28 h-48 sm:h-28 shrink-0 overflow-hidden rounded-xl bg-background-alt">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-heading font-semibold text-text text-lg leading-tight">
            {member.name}
          </p>
          <p className="font-body text-sm text-primary font-medium mt-1">
            {member.designation}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {member.specialization.map((s) => (
              <span
                key={s}
                className="text-xs font-body text-text-muted border border-border rounded-full px-2.5 py-0.5"
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
      className={cn("group relative overflow-hidden bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-500", className)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Portrait Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-background-alt">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* LinkedIn button */}
        {member.linkedIn && (
          <Link
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-violet-100"
          >
            <IconBrandLinkedin size={18} className="text-primary hover:text-white" />
          </Link>
        )}

        {/* Hover info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="font-body text-xs text-white/80 leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 border border-t-0 border-border rounded-b-2xl group-hover:border-violet-300 transition-colors duration-500">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-heading font-semibold text-text text-lg leading-tight">
              {member.name}
            </p>
            <p className="font-body text-sm text-primary font-medium mt-1">
              {member.designation}
            </p>
          </div>
          <span className="shrink-0 mt-1 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
            <IconArrowUpRight
              size={16}
              className="text-text-light group-hover:text-white transition-colors duration-300"
            />
          </span>
        </div>

        <div
          className="my-4 h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-full"
          style={{ background: "linear-gradient(90deg, #7C3AED, #34D399)" }}
        />

        <div className="flex flex-wrap gap-1.5">
          {member.specialization.map((s) => (
            <span
              key={s}
              className="text-xs font-body text-text-muted border border-border rounded-full px-2.5 py-0.5 group-hover:border-violet-300 transition-colors duration-300"
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
