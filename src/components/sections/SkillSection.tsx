import { SkillBadges } from "@/mocks/sections";
import SkillBadge from "../SkillBadge";

export default function SkillSection() {
  return (
    <div className="flex flex-wrap gap-2">
      {SkillBadges.map(({ label, src }) => (
        <SkillBadge key={label} label={label} src={src} />
      ))}
    </div>
  );
}
