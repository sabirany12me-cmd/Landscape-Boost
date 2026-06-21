export interface ChallengeItem {
  id: string;
  title: string;
  leakRate: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface SolutionItem {
  id: string;
  num: number;
  title: string;
  description: string;
  benefit: string;
  iconName: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  landscapeBoost: string;
  boostStatus: 'yes' | 'no' | 'partial';
  genericAgency: string;
  agencyStatus: 'yes' | 'no' | 'partial';
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingDetails {
  date: string;
  timeSlot: string;
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  monthlyLeads: number;
  niche: string;
}
