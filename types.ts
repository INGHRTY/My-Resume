export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  achievements?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Wedding' | 'Portrait';
  imageUrl: string;
  images?: string[];    // New: Array of images for the gallery view
  description?: string; // New: Detailed description
  client?: string;      // New: Client name
  date?: string;        // New: Project date
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Short Video' | 'Event';
  thumbnailUrl: string;
  videoUrl?: string;    // New: Link to actual video (simulated)
  duration: string;
  views?: string;
  description?: string; // New: Detailed description
  role?: string;        // New: Specific role in the video production
  client?: string;      // New: Client name
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
}

export interface SoftwareTool {
  name: string;
  icon: string; // Just initials for simplicity or icon name
}