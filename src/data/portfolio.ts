import type { Experience, Education, Project, BlogPost, Certification, ContactInfo } from '@/types'

export const experiences: Experience[] = [
  {
    title: 'Web Developer',
    company: 'Digitaliz',
    period: '2023–Present',
    details: [
      'Developed MVP for hulutalent.id',
      'Bug fixes within 24 hours',
      'Legacy code optimization: +30% efficiency'
    ]
  },
  {
    title: 'Web Dev Intern',
    company: 'Digitaliz',
    period: '2022',
    details: [
      'Built FilesGI file management system',
      'Efficient database structure (+20% performance)'
    ]
  },
  {
    title: 'Teaching Assistant Coordinator',
    company: 'University',
    period: '2019',
    details: [
      'Led team of 7 assistants, achieved 95% learning success rate'
    ]
  }
]

export const education: Education = {
  degree: 'Bachelor of Computer Science',
  institution: 'Lambung Mangkurat University',
  gpa: '3.74',
  achievements: [
    'PPA, GenBI Scholarship recipient',
    'Sinta 2 journal publication: "Baby Cry Sound Detection..."'
  ]
}

export const projects: Project[] = [
  {
    title: 'HuluTalent.id',
    description: 'A talent recruitment platform for South Kalimantan\'s creative industry. Developed the MVP with optimized user flows and responsive design.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Laravel', 'PHP', 'MySQL'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'FilesGI',
    description: 'Enterprise file management system with advanced permissions, real-time collaboration, and version control features.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Baby Cry Detection',
    description: 'Machine learning model to classify baby cries by cause (hunger, pain, sleepiness) with 87% accuracy using sound pattern recognition.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'TensorFlow', 'Signal Processing'],
    demoUrl: '#',
    sourceUrl: '#'
  }
]

export const blogPosts: BlogPost[] = [
  {
    title: 'Optimizing Laravel Applications: My Approach to 30% Performance Gains',
    date: 'April 10, 2025',
    excerpt: 'In this article, I share the techniques I used to optimize legacy code at Digitaliz, resulting in a 30% performance improvement while maintaining code reliability.',
    readUrl: '#'
  },
  {
    title: 'The Future of Web Development in Indonesia',
    date: 'March 15, 2025',
    excerpt: 'An analysis of current trends and future prospects for web developers in Indonesia, with insights from my experience in the Kalimantan tech scene.',
    readUrl: '#'
  },
  {
    title: 'From University Project to Published Research: My Journey',
    date: 'February 22, 2025',
    excerpt: 'How my undergraduate project on baby cry sound detection evolved into a published paper in a Sinta 2 journal, and lessons learned along the way.',
    readUrl: '#'
  }
]

export const certifications: Certification[] = [
  {
    title: 'IBM DevOps and Software Engineering',
    issuer: 'Coursera',
    date: '03/2023 - Present'
  },
  {
    title: 'Google IT Automation with Python',
    issuer: 'Coursera',
    date: '03/2021 - Present'
  },
  {
    title: 'Google IT Support',
    issuer: 'Coursera',
    date: '03/2021 - Present'
  },
  {
    title: 'Junior Web Developer',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    date: '10/2023 - 10/2026'
  },
  {
    title: 'Belajar Dasar-Dasar DevOps',
    issuer: 'Dicoding',
    date: '03/2023 - 03/2026'
  },
  {
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding',
    date: '01/2023 - 01/2026'
  }
]

export const contactInfo: ContactInfo = {
  location: 'Banjarmasin, South Kalimantan, Indonesia',
  email: 'ridhofahmij225@gmail.com',
  phone: '+62 895-3882-20777'
}

export const technicalSkills = [
  { name: 'PHP', icon: 'fab fa-php' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Laravel', icon: 'fab fa-laravel' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'SQL', icon: 'fas fa-database' },
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Tableau', icon: 'fas fa-chart-bar' }
]

export const softSkills = [
  'Problem Solving',
  'Leadership',
  'Public Speaking',
  'Team Collaboration',
  'Time Management',
  'Communication'
]