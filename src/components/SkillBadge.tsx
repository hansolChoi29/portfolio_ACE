"use client";

import Image from "next/image";

interface SkillBadgeProps {
  src: string;
  label: string;
}

export default function SkillBadge({ src, label }: SkillBadgeProps) {
  return (
    <div className="flex items-center space-x-2  px-3 py-1 text-sm font-medium">
      <Image
        src={src}
        alt={`${label} logo`}
        width={16}
        height={16}
        priority={false}
        unoptimized
      />
      <span>{label}</span>
    </div>
  );
}
