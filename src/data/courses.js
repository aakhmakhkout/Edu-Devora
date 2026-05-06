import bca from "../assets/bca.png"
import btech from "../assets/btech.png"
import bba from "../assets/bba.png"
import nursing from "../assets/nursing.png"
import llb from "../assets/llb.png"
import ba from "../assets/ba.png"
import fullstackimg from "../assets/fullstack.png"
import pharmacyimg from "../assets/pharmacy.png"
import mbaimg from "../assets/mba.png"
import datascienceimg from "../assets/datascience.png"
import cybersecurityimg from "../assets/cybersecurity.png"
import cloudcomputingimg from "../assets/cloudcomputing.png"
import digimarkimg from "../assets/digitalmarketing.png"
import hrmimg from "../assets/hrm.png"
import financeimg from "../assets/finance.png"
import mbbsimg from "../assets/mbbs.png"

export const CourseCatagories = [
    {catagory:"All Catagories", id:1},
    {catagory:"Technology", id:2},
    {catagory:"Management", id:3},
    {catagory:"Medical", id:4},
    {catagory:"Law", id:5},
    {catagory:"Arts & Humanities", id:6}
  ]
  
export const courseData = [
  {
    id: 1,
    courseName: "BCA Complete Course",
    catag: "Technology",
    img: bca,
    description: "Learn programming, databases, and software development fundamentals for IT careers.",
    lessons: 60,
    hours: 120
  },
  {
    id: 2,
    courseName: "Full Stack Web Development",
    catag: "Technology",
    img: fullstackimg,
    description: "Build modern web applications using frontend and backend technologies.",
    lessons: 75,
    hours: 150
  },
  {
    id: 3,
    courseName: "Data Science & Analytics",
    catag: "Technology",
    img: datascienceimg,
    description: "Analyze data, build models, and extract insights using modern tools.",
    lessons: 80,
    hours: 160
  },
  {
    id: 4,
    courseName: "Cyber Security Fundamentals",
    catag: "Technology",
    img: cybersecurityimg,
    description: "Learn ethical hacking and how to secure systems from cyber threats.",
    lessons: 55,
    hours: 110
  },
  {
    id: 5,
    courseName: "Cloud Computing Basics",
    catag: "Technology",
    img: cloudcomputingimg,
    description: "Understand cloud platforms, deployment, and scalable infrastructure.",
    lessons: 50,
    hours: 100
  },

  {
    id: 6,
    courseName: "BBA Complete Course",
    catag: "Management",
    img: bba,
    description: "Build strong foundations in business, leadership, and management skills.",
    lessons: 65,
    hours: 130
  },
  {
    id: 7,
    courseName: "MBA Advanced Program",
    catag: "Management",
    img: mbaimg,
    description: "Master business strategy, operations, and executive decision-making.",
    lessons: 90,
    hours: 180
  },
  {
    id: 8,
    courseName: "Digital Marketing Mastery",
    catag: "Management",
    img: digimarkimg,
    description: "Learn SEO, ads, and social media marketing for business growth.",
    lessons: 55,
    hours: 110
  },
  {
    id: 9,
    courseName: "Human Resource Management",
    catag: "Management",
    img: hrmimg,
    description: "Understand hiring, training, and employee management processes.",
    lessons: 50,
    hours: 95
  },
  {
    id: 10,
    courseName: "Finance & Accounting",
    catag: "Management",
    img: financeimg,
    description: "Learn budgeting, financial planning, and corporate finance basics.",
    lessons: 70,
    hours: 140
  },

  {
    id: 11,
    courseName: "MBBS Preparation Course",
    catag: "Medical",
    img: mbbsimg,
    description: "Comprehensive learning path for medical science and clinical basics.",
    lessons: 100,
    hours: 200
  },
  {
    id: 12,
    courseName: "B.Sc Nursing",
    catag: "Medical",
    img: nursing,
    description: "Learn patient care, clinical skills, and healthcare practices.",
    lessons: 80,
    hours: 160
  },
  {
    id: 13,
    courseName: "Pharmacy (B.Pharm)",
    catag: "Medical",
    img: pharmacyimg,
    description: "Study drug composition, usage, and pharmaceutical science.",
    lessons: 75,
    hours: 150
  },
  {
    id: 14,
    courseName: "Physiotherapy Course",
    catag: "Medical",
    img: bca,
    description: "Focus on rehabilitation, physical therapy, and movement science.",
    lessons: 60,
    hours: 120
  },
  {
    id: 15,
    courseName: "Public Health Studies",
    catag: "Medical",
    img: bca,
    description: "Understand healthcare systems, disease prevention, and policies.",
    lessons: 55,
    hours: 105
  },

  {
    id: 16,
    courseName: "LLB Complete Course",
    catag: "Law",
    img: llb,
    description: "Study legal systems, rights, and foundational law concepts.",
    lessons: 70,
    hours: 140
  },
  {
    id: 17,
    courseName: "Corporate Law Specialization",
    catag: "Law",
    img: bca,
    description: "Learn business laws, contracts, and corporate regulations.",
    lessons: 60,
    hours: 120
  },
  {
    id: 18,
    courseName: "Criminal Law Studies",
    catag: "Law",
    img: bca,
    description: "Understand criminal justice systems and legal procedures.",
    lessons: 65,
    hours: 130
  },
  {
    id: 19,
    courseName: "Constitutional Law",
    catag: "Law",
    img: bca,
    description: "Explore rights, governance, and constitutional frameworks.",
    lessons: 55,
    hours: 110
  },
  {
    id: 20,
    courseName: "Legal Research & Writing",
    catag: "Law",
    img: bca,
    description: "Develop strong research, analysis, and legal writing skills.",
    lessons: 50,
    hours: 100
  }

]



export const courseDetails = [
  {
    id: 1,
    type: "course",
    courseName: "BCA Complete Course",
    subjects: [
      {id:1, name: "Programming", topics: ["C", "Java", "Python"] },
      {id:2, name: "Database", topics: ["SQL", "MongoDB"] },
      {id:3, name: "Web Dev", topics: ["HTML", "CSS", "JS"] },
      {id:4, name: "Operating Systems", topics: ["Processes", "Memory"] },
      {id:5, name: "Networking", topics: ["OSI", "Protocols"] }
    ],
    topics: 90,
    duration: 3,
    students: 1200,
    projects: "5 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 2,
    type: "course",
    courseName: "Full Stack Web Development",
    subjects: [
      {id:1, name: "Frontend", topics: ["React", "Hooks", "Routing"] },
      {id:2, name: "Backend", topics: ["Node", "Express"] },
      {id:3, name: "Database", topics: ["MongoDB", "Schemas"] },
      {id:4, name: "Authentication", topics: ["JWT", "OAuth"] },
      {id:5, name: "Deployment", topics: ["Vercel", "Netlify"] }
    ],
    topics: 110,
    duration: 4,
    students: 1500,
    projects: "6 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 3,
    type: "course",
    courseName: "Data Science & Analytics",
    subjects: [
      {id:1, name: "Python", topics: ["Pandas", "NumPy"] },
      { name: "Statistics", topics: ["Mean", "Variance"] },
      { name: "Machine Learning", topics: ["Regression", "Classification"] },
      { name: "Visualization", topics: ["Matplotlib"] },
      { name: "Projects", topics: ["Data Analysis"] }
    ],
    topics: 120,
    duration: 5,
    students: 1300,
    projects: "5 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 4,
    type: "course",
    courseName: "Cyber Security Fundamentals",
    subjects: [
      { name: "Networking", topics: ["Protocols", "OSI"] },
      { name: "Security", topics: ["Encryption", "Hashing"] },
      { name: "Attacks", topics: ["Phishing", "XSS"] },
      { name: "Tools", topics: ["Wireshark", "Nmap"] },
      { name: "Ethical Hacking", topics: ["Pen Testing"] }
    ],
    topics: 85,
    duration: 3,
    students: 900,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 5,
    type: "course",
    courseName: "Cloud Computing Basics",
    subjects: [
      { name: "AWS", topics: ["EC2", "S3"] },
      { name: "Networking", topics: ["VPC"] },
      { name: "Storage", topics: ["Databases"] },
      { name: "Security", topics: ["IAM"] },
      { name: "Deployment", topics: ["Scaling"] }
    ],
    topics: 80,
    duration: 3,
    students: 800,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },

  {
    id: 6,
    type: "course",
    courseName: "BBA Complete Course",
    subjects: [
      { name: "Business", topics: ["Principles", "Strategy"] },
      { name: "Marketing", topics: ["Branding", "Campaigns"] },
      { name: "Finance", topics: ["Budgeting", "Accounts"] },
      { name: "HR", topics: ["Recruitment", "Training"] },
      { name: "Communication", topics: ["Soft Skills"] }
    ],
    topics: 90,
    duration: 3,
    students: 1000,
    projects: "4 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 7,
    type: "course",
    courseName: "MBA Advanced Program",
    subjects: [
      { name: "Strategy", topics: ["Planning", "Execution"] },
      { name: "Finance", topics: ["Corporate Finance"] },
      { name: "Operations", topics: ["Supply Chain"] },
      { name: "Leadership", topics: ["Decision Making"] },
      { name: "Marketing", topics: ["Advanced Marketing"] }
    ],
    topics: 130,
    duration: 5,
    students: 1100,
    projects: "5 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 8,
    type: "course",
    courseName: "Digital Marketing Mastery",
    subjects: [
      { name: "SEO", topics: ["On-page", "Off-page"] },
      { name: "Ads", topics: ["Google Ads", "Facebook Ads"] },
      { name: "Social Media", topics: ["Content", "Growth"] },
      { name: "Analytics", topics: ["Tracking", "Reports"] },
      { name: "Content", topics: ["Copywriting"] }
    ],
    topics: 85,
    duration: 3,
    students: 950,
    projects: "4 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 9,
    type: "course",
    courseName: "Human Resource Management",
    subjects: [
      { name: "Recruitment", topics: ["Hiring", "Screening"] },
      { name: "Training", topics: ["Employee Development"] },
      { name: "Payroll", topics: ["Salary", "Benefits"] },
      { name: "Policies", topics: ["HR Policies"] },
      { name: "Communication", topics: ["Workplace Skills"] }
    ],
    topics: 75,
    duration: 2,
    students: 700,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 10,
    type: "course",
    courseName: "Finance & Accounting",
    subjects: [
      { name: "Accounting", topics: ["Balance Sheet"] },
      { name: "Finance", topics: ["Investments"] },
      { name: "Budgeting", topics: ["Planning"] },
      { name: "Tax", topics: ["Basics"] },
      { name: "Analysis", topics: ["Reports"] }
    ],
    topics: 100,
    duration: 4,
    students: 850,
    projects: "4 Projects",
    liveSessions: "Weekly"
  },

  {
    id: 11,
    type: "course",
    courseName: "MBBS Preparation Course",
    subjects: [
      { name: "Biology", topics: ["Cells", "Genetics"] },
      { name: "Anatomy", topics: ["Organs"] },
      { name: "Physiology", topics: ["Functions"] },
      { name: "Chemistry", topics: ["Organic"] },
      { name: "Clinical", topics: ["Basics"] }
    ],
    topics: 140,
    duration: 6,
    students: 600,
    projects: "5 Projects",
    liveSessions: "Daily"
  },
  {
    id: 12,
    type: "course",
    courseName: "B.Sc Nursing",
    subjects: [
      { name: "Nursing", topics: ["Patient Care"] },
      { name: "Anatomy", topics: ["Body Systems"] },
      { name: "Pharmacology", topics: ["Drugs"] },
      { name: "Clinical", topics: ["Practices"] },
      { name: "Health", topics: ["Hygiene"] }
    ],
    topics: 120,
    duration: 4,
    students: 750,
    projects: "4 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 13,
    type: "course",
    courseName: "Pharmacy (B.Pharm)",
    subjects: [
      { name: "Pharma", topics: ["Drugs"] },
      { name: "Chemistry", topics: ["Compounds"] },
      { name: "Biology", topics: ["Human Body"] },
      { name: "Pharmacology", topics: ["Usage"] },
      { name: "Research", topics: ["Trials"] }
    ],
    topics: 110,
    duration: 4,
    students: 720,
    projects: "4 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 14,
    type: "course",
    courseName: "Physiotherapy Course",
    subjects: [
      { name: "Therapy", topics: ["Rehabilitation"] },
      { name: "Anatomy", topics: ["Muscles"] },
      { name: "Exercise", topics: ["Movement"] },
      { name: "Injury", topics: ["Recovery"] },
      { name: "Clinical", topics: ["Practice"] }
    ],
    topics: 95,
    duration: 3,
    students: 650,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 15,
    type: "course",
    courseName: "Public Health Studies",
    subjects: [
      { name: "Public Health", topics: ["Systems"] },
      { name: "Epidemiology", topics: ["Diseases"] },
      { name: "Policy", topics: ["Healthcare"] },
      { name: "Prevention", topics: ["Vaccination"] },
      { name: "Research", topics: ["Studies"] }
    ],
    topics: 85,
    duration: 3,
    students: 500,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },

  {
    id: 16,
    type: "course",
    courseName: "LLB Complete Course",
    subjects: [
      { name: "Law Basics", topics: ["Legal System"] },
      { name: "Constitution", topics: ["Rights"] },
      { name: "Civil Law", topics: ["Cases"] },
      { name: "Criminal Law", topics: ["Procedures"] },
      { name: "Practice", topics: ["Court"] }
    ],
    topics: 100,
    duration: 4,
    students: 800,
    projects: "4 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 17,
    type: "course",
    courseName: "Corporate Law Specialization",
    subjects: [
      { name: "Corporate Law", topics: ["Business Law"] },
      { name: "Contracts", topics: ["Agreements"] },
      { name: "Compliance", topics: ["Regulations"] },
      { name: "Finance Law", topics: ["Corporate Finance"] },
      { name: "Practice", topics: ["Case Study"] }
    ],
    topics: 90,
    duration: 3,
    students: 650,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 18,
    type: "course",
    courseName: "Criminal Law Studies",
    subjects: [
      { name: "Criminal Law", topics: ["Offenses"] },
      { name: "Evidence", topics: ["Proof"] },
      { name: "Procedure", topics: ["Trials"] },
      { name: "Investigation", topics: ["Process"] },
      { name: "Practice", topics: ["Cases"] }
    ],
    topics: 95,
    duration: 3,
    students: 700,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 19,
    type: "course",
    courseName: "Constitutional Law",
    subjects: [
      { name: "Constitution", topics: ["Rights"] },
      { name: "Governance", topics: ["Structure"] },
      { name: "Law", topics: ["Articles"] },
      { name: "Judiciary", topics: ["Courts"] },
      { name: "Practice", topics: ["Case Study"] }
    ],
    topics: 85,
    duration: 3,
    students: 600,
    projects: "3 Projects",
    liveSessions: "Weekly"
  },
  {
    id: 20,
    type: "course",
    courseName: "Legal Research & Writing",
    subjects: [
      { name: "Research", topics: ["Methods"] },
      { name: "Writing", topics: ["Drafting"] },
      { name: "Analysis", topics: ["Case Study"] },
      { name: "Citation", topics: ["Formats"] },
      { name: "Practice", topics: ["Reports"] }
    ],
    topics: 80,
    duration: 2,
    students: 550,
    projects: "3 Projects",
    liveSessions: "Weekly"
  }
];