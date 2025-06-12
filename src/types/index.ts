export interface Experience {
  title: string;
  company: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  gpa: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  readUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}