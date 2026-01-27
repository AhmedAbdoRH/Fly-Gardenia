import React from 'react';
import {
  FileSearch,
  FolderCog,
  Recycle,
  Factory,
  BadgeCheck,
  HardHat,
  Infinity,
  Presentation,
  Leaf
} from 'lucide-react';

export const IconMap: Record<string, any> = {
  FileText: FileSearch,
  FolderOpen: FolderCog,
  Trash2: Recycle,
  Globe: Factory,
  Award: BadgeCheck,
  ShieldCheck: HardHat,
  RefreshCcw: Infinity,
  Users: Presentation
};

export const getIcon = (name: string) => {
  const Icon = IconMap[name] || Leaf;
  // Use currentColor for stroke and add color classes for better contrast and hover interaction.
  return (
    <Icon
      className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 drop-shadow-sm stroke-current"
      strokeWidth={1.6}
      aria-hidden="true"
      focusable="false"
    />
  );
};