import {
  FileSearch,
  FolderCog,
  Recycle,
  Factory,
  BadgeCheck,
  HardHat,
  Infinity,
  Presentation,
  Leaf,
  Scale,
  Zap,
  Sprout,
  CheckCircle2,
  Handshake,
  GraduationCap
} from 'lucide-react';

export const IconMap: Record<string, any> = {
  // Services
  FileText: FileSearch,
  FolderOpen: FolderCog,
  Trash2: Recycle,
  Globe: Factory,
  Award: BadgeCheck,
  ShieldCheck: HardHat,
  RefreshCcw: Infinity,
  Users: Presentation,
  // Values
  Compliance: Scale,
  Practical: Zap,
  Sustainability: Sprout,
  Quality: CheckCircle2,
  Partnership: Handshake,
  Training: GraduationCap
};

export const getIcon = (name: string, className?: string) => {
  const Icon = IconMap[name] || Leaf;
  return (
    <Icon
      className={className || "w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 drop-shadow-sm stroke-current"}
      strokeWidth={1.6}
      aria-hidden="true"
      focusable="false"
    />
  );
};