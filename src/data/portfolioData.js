export const personalInfo = {
  name: "Thinh Nguyen Duc_",
  shortName: "Thinh Nguyen",
  role: "Computer Science Student & Full-Stack Developer",
  bio: "I am a third-year Computer Science student at Ho Chi Minh City University of Technology, driven by a deep passion for building innovative and efficient software systems. With a solid technical foundation and hands-on experience across diverse projects, I thrive on tackling complex challenges—ranging from system-level architecture to user-facing applications and continuously seek opportunities to create impactful solutions.",
  age: "20",
  phone: "(84+) 394 940 599",
  email: "cbl.thinhnguyen@gmail.com",
  address: "Ta Quang Buu Street, Quarter 33, Linh Xuan, Ho Chi Minh City",
  university: "Ho Chi Minh City University of Technology",
  universityTime: "2023 - Present",
  profileImage: "/assets/img/profile.png",
  cvPath: "/assets/img/cv.pdf",
  socials: {
    github: "https://github.com/Thinkj07/",
    linkedin: "https://www.linkedin.com/in/thinkj07/",
    facebook: "https://www.facebook.com/thinhnguyen0707/"
  }
};

export const servicesData = [
  {
    id: "fullstack",
    iconName: "Server",
    image: "/assets/img/pc.png",
    title: "FULL-STACK DEVELOPMENT",
    description: "Building scalable web applications with MERN stack, JWT authentication, role-based access control, and RESTful APIs."
  },
  {
    id: "frontend",
    iconName: "Layout",
    image: "/assets/img/laptop.png",
    title: "FRONTEND DEVELOPMENT",
    description: "Creating responsive, modern UIs with React, HTML5, CSS3, dynamic state management, and interactive animations."
  },
  {
    id: "ai-game",
    iconName: "Cpu",
    image: "/assets/img/art.png",
    title: "AI & GAME DEVELOPMENT",
    description: "Developing intelligent systems with Python, Machine Learning algorithms (MCTS & Minimax), and game engines like Pygame."
  }
];

export const educationData = [
  {
    institution: "Ho Chi Minh City University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2023 - Present",
    status: "3rd Year Student",
    description: "Focusing on Software Engineering, Data Structures & Algorithms, Artificial Intelligence, Computer Networks, and System Architecture."
  }
];

export const skillsData = {
  frontend: [
    { name: "ReactJS", level: 85 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "Tailwind CSS & UI Libraries", level: 85 }
  ],
  backend: [
    { name: "Node.js & Express", level: 85 },
    { name: "Python", level: 90 },
    { name: "Java", level: 80 },
    { name: "MySQL & MongoDB", level: 80 }
  ]
};

export const projectsData = [
  {
    id: "itworks",
    title: "ITWORKS",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    image: "/assets/img/project-1.png",
    description: "A full-stack job platform with JWT authentication, role-based access control, advanced job filtering, application tracking, and Admin Dashboard with audit logging.",
    stack: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
    github: "https://github.com/Thinkj07/itwork",
    featured: true
  },
  {
    id: "portfolio",
    title: "PERSONAL PORTFOLIO",
    category: "frontend",
    categoryLabel: "Frontend",
    image: "/assets/img/project-2.png",
    description: "A modern, responsive portfolio website with interactive Canvas animations, dynamic project filtering, and serverless contact form integration.",
    stack: ["React", "HTML5", "CSS3", "JavaScript", "Vite"],
    github: "https://github.com/Thinkj07/thinh-nguyen-dev",
    featured: true
  },
  {
    id: "connect4",
    title: "CONNECT 4 AI",
    category: "ai",
    categoryLabel: "AI & Game",
    image: "/assets/img/project-3.png",
    description: "A tactical board game for 2-3 players with AI (MCTS & Minimax algorithms optimized by Neural Network), real-time scoring, physics-based animations, and JSON save/load system.",
    stack: ["Python", "Pygame", "Scikit-learn"],
    github: "https://github.com/Thinkj07/Connect_4",
    featured: true
  }
];

export const testimonialsData = [
  {
    name: "Sam Altman",
    title: "OpenAI",
    quote: "The transition to a world with ubiquitous AI is going to be the fastest and most consequential transformation in human history."
  },
  {
    name: "Demis Hassabis",
    title: "AlphaFold / Google DeepMind",
    quote: "I think we're at the beginning of a new era of digital biology, where we can think about biology as an information processing system."
  },
  {
    name: "Linus Torvalds",
    title: "Creator of Linux & Git",
    quote: "I'm an egotistical bastard, and I name all my projects after myself. First 'Linux', now 'Git'."
  }
];

export const blogPostsData = [
  {
    id: "ai-coding",
    title: "The Rise of AI Coding Assistants",
    date: "March 6, 2026",
    image: "/assets/img/blog-1.png",
    excerpt: "AI tools are transforming how developers write code by increasing productivity and reducing errors. They are becoming an essential part of modern software development.",
    readTime: "4 min read"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing in Everyday Life",
    date: "February 28, 2025",
    image: "/assets/img/blog-2.png",
    excerpt: "Cloud services now power everything from file storage to streaming platforms. They make data more accessible and scalable than ever before.",
    readTime: "3 min read"
  },
  {
    id: "smart-homes",
    title: "The Future of Smart Homes",
    date: "July 27, 2023",
    image: "/assets/img/blog-3.png",
    excerpt: "Smart home technology is making daily life more convenient and efficient. From voice assistants to automated systems, homes are becoming increasingly intelligent.",
    readTime: "5 min read"
  }
];
