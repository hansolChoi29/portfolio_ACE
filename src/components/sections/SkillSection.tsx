"use client";
import { SkillBadges } from "@/mocks/sections";
import SkillBadge from "../SkillBadge";

export default function SkillSection() {
  return (
    <div className="flex flex-col my-12  w-full ">
      <p className="text-xl flex justify-center pb-2 logo ">My skill</p>
      <div className="flex flex-wrap justify-center gap-4">
        {SkillBadges.map(({ label, src, colorBadges }) => (
          <SkillBadge
            key={label}
            label={label}
            src={src}
            colorBadges={colorBadges}
          />
        ))}
      </div>
    </div>
  );
}
