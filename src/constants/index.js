  export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Resume',
      href: 'https://docs.google.com/document/d/1a-QwXxnBf3oRu81pyGQSqE2fcJX5BdTo/edit?usp=sharing&ouid=116174180718668317883&rtpof=true&sd=true',
    },
    {
      id: 5,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 6,
      name: 'Contact',
      href: '#contact',
    },
  ];


  export const myProjects = [
    {
      title: 'IntervuAI -AI Mock Interview Pro',
      desc: 'IntervuAI is an AI-powered job interview preparation platform with interactive voice-assisted mock interviews. It simulates real interview scenarios, provides instant feedback, tracks progress, and improve their communication and interview skills effectively.',
      subdesc:
        'IntervuAI uses Next.js, ShadCN UI, and TypeScript for a modern, scalable frontend, with Firebase handling authentication and data storage. Vapi AI powers voice interviews, while Gemini AI generates questions and feedback, ensuring an intelligent and interactive experience.',
      href: 'https://intervuai-mock.vercel.app/',
      texture: '/textures/project/ai_interview.mp4',
      logo: '/assets/project-logo/IntervuAI.ico',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/project-spotlight/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/project-skills/nextjs.png',
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/project-skills/typescript.png',
        },
        {
          id: 3,
          name: 'Firebase',
          path: '/assets/project-skills/firebase.png',
        },
        {
          id: 4,
          name: 'Vapi ',
          path: '/assets/project-skills/vapi.png',
        },
      ],
    },
   {
  "title": "ASPIRE AI - AI Career Boost Hub",
  "desc": "ASPIRE AI is an AI-driven career hub that offers personalized job insights, AI-powered Quiz preparation, resume and cover letter generation, and trending skill analysis to help users advance in their careers.",
  "subdesc": "Built with Next.js, ShadCN UI, and TypeScript for a seamless experience, ASPIRE AI leverages Clerk for authentication, Prisma ORM with PostgreSQL for data management, and Inngest for background task automation. Gemini AI powers intelligent job insights, resume building, and AI Quiz preparation .",
  "href": "https://aspire-ai-delta.vercel.app/",
  "texture": "/textures/project/career_hub.mp4",
  "logo": "/assets/project-logo/aspire.jpg",
  "logoStyle": {
    "backgroundColor": "#60f5a1",
    "background": "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
    "border": "0.2px solid rgba(208, 213, 221, 1)",
    "boxShadow": "0px 0px 60px 0px rgba(35, 131, 96, 0.3)"
  },
  "spotlight": "/assets/project-spotlight/spotlight4.png",
  "tags": [
    {
      "id": 1,
      "name": "Next.js",
      "path": "/assets/project-skills/nextjs.png"
    },
    {
      "id": 2,
      "name": "Clerk",
      "path": "/assets/project-skills/clerk.png"
    },
    {
      "id": 3,
      "name": "Prisma",
      "path": "/assets/project-skills/primsa.png"
    },
    {
      "id": 4,
      "name": "Gemini AI",
      "path": "/assets/project-skills/gemini.jpg"
    },
  ]
},
{
  "title": "AVP Landing Page - Dance Studio Website",
  "desc": "AVP Landing Page is a visually engaging and modern website designed for a dance studio, showcasing classes, events, and instructors with a seamless user experience.",
  "subdesc": "Built using React and Vite for fast performance, the AVP Landing Page is styled with Tailwind CSS and enhanced with Acertainty UI and ShadCN for a sleek and dynamic design. The site provides an immersive experience for dance enthusiasts, featuring smooth animations and an intuitive layout. A Contact Us form is integrated using EmailJS, allowing users to reach out easily via email.",
  "href": "https://avp-landing-page.vercel.app/",
  "texture": "/textures/project/avp-landing-page.mp4",
  "logo": "/assets/project-logo/dance_avp.png",
  "logoStyle": {
    "backgroundColor": "#f5a160",
    "background": "linear-gradient(0deg, #F5A16050, #F5A16050), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
    "border": "0.2px solid rgba(208, 213, 221, 1)",
    "boxShadow": "0px 0px 60px 0px rgba(240, 128, 64, 0.3)"
  },
  spotlight: '/assets/project-spotlight/spotlight5.png',
  tags: [
    {
      id: 1,
      name: 'React.js',
      path: '/assets/project-skills/react.svg',
    },
    {
      id: 2,
      name: 'TailwindCSS',
      path: 'assets/project-skills/tailwindcss.png',
    },
    {
      id: 3,
      name: 'Javascript',
      path: '/assets/project-skills/js.svg',
    },
    {
      id: 4,
      name: 'Vite',
      path: '/assets/project-skills/vite.svg',
    },
  ],
},
{
  title: 'Lorpy - npm Package for Local Dev Sharing',
  desc: 'Lorpy is a CLI tool that makes sharing your local development server as easy as a single command, complete with QR code generation and secure access. Perfect for mobile testing, client demos, and webhook testing.',
  subdesc:
    'Built on top of localtunnel, Lorpy simplifies development collaboration by providing instant, secure tunnel URLs. It includes QR code generation for quick sharing, password protection using public IP, and supports API/webhook integration without auth prompts.',
  href: 'https://www.npmjs.com/package/lorpy',
  texture: '/textures/project/npm.mp4',
  logo: '/assets/project-logo/npm.png',
  logoStyle: {
    backgroundColor: '#60f5a1',
    background:
      'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    border: '0.2px solid rgba(208, 213, 221, 1)',
    boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  },
  spotlight: '/assets/project-spotlight/spotlight3.png',
  tags: [
    {
      id: 1,
      name: 'Express',
      path: 'assets/project-skills/express.png',
    },
    {
      id: 2,
      name: 'Javascript',
      path: '/assets/project-skills/js.svg',
    },
  ],
},
{
  title: "AlgoViz - Interactive Data Structures & Algorithms Visualizer",
  desc: "AlgoViz is a web-based platform that visualizes data structures and algorithms through real-time animations. It helps users understand complex DSA concepts interactively.",
  subdesc: "Built with React.js and Tailwind CSS, AlgoViz provides an intuitive interface to explore arrays, linked lists, trees, sorting, searching, and pathfinding algorithms with dynamic animations.",
  href: 'https://algo-viz-seven.vercel.app/',
  texture: '/textures/project/project-algoviz.mp4',
  logo: '/assets/project-logo/logo-viz.png',
  logoStyle: {
    backgroundColor: '#2A1816',
    border: '0.2px solid #36201D',
    boxShadow: '0px 0px 60px 0px #AA3C304D',
  },
  spotlight: '/assets/project-spotlight/spotlight1.png',
  tags: [
    {
      id: 1,
      name: 'React.js',
      path: '/assets/project-skills/react.svg',
    },
    {
      id: 2,
      name: 'TailwindCSS',
      path: 'assets/project-skills/tailwindcss.png',
    },
    {
      id: 3,
      name: 'Javascript',
      path: '/assets/project-skills/js.svg',
    },
  ],
},
{
  title: "ElectroMart - E-Commerce Electronics Platform",
desc: "ElectroMart is a scalable e-commerce platform for electronics, built with a microservices architecture. It offers advanced product search, filtering, and secure transactions.",
subdesc: "Developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with Vite and Tailwind CSS, ElectroMart ensures high performance and a seamless user experience. Integrated with Razorpay for secure payments, it features role-based access with admin control for managing products, orders, and users, while customers can browse, filter, and purchase electronics effortlessly.",
  href: 'https://ecommerce-client-git-main-nitesh-dks-projects.vercel.app/',
  texture: '/textures/project/electro-mart.mp4',
  logo: '/assets/project-logo/logo-electro-mart.png',
  logoStyle: {
    backgroundColor: '#13202F',
    border: '0.2px solid #17293E',
    boxShadow: '0px 0px 60px 0px #2F6DB54D',
  },
  spotlight: '/assets/project-spotlight/spotlight2.png',
  tags: [
    {
      id: 1,
      name: 'React.js',
      path: '/assets/project-skills/react.svg',
    },
    {
      id: 2,
      name: 'Express',
      path: 'assets/project-skills/express.png',
    },
    {
      id: 3,
      name: 'MongoDB',
      path: '/assets/project-skills/mongo.png',
    },
    {
      id: 3,
      name: 'RazorPay',
      path: '/assets/project-skills/razorpay.webp',
    },
  ],
},


  ];



  export const workExperiences = [
    {
      id: 1,
      name: 'Reimagine-24',
      pos: 'Frontend-Developer',
      duration: 'September- 2024',
      title: "Redesigned brand websites with a sleek UI, engaging animations, and enhanced user experience. Optimized for seamless performance and responsiveness across all devices.",
      icon: '/assets/experience/reimagine.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Codement-24',
      pos: 'Backend Developer',
      duration: 'April- 2024',
      title: "Developed an agriculture-focused web application to assist farmers with real-time weather updates and personalized planting guidance. Integrated plant detection features to help identify crops and diseases efficiently",
      icon: '/assets/experience/codement-24.png',
      animation: 'clapping',
    },  
    {
      id: 3,
      name: 'SBI',
      pos: 'Data Entry Associate',
      duration: '2019 - 2022',
      title: "Skilled in data entry and management, with experience in banking data and KYC regulations. Proficient in handling both offline and online data processes efficiently.",
      icon: '/assets/experience/sbi-logo.webp',
      animation: 'salute',
    },
  ];

 export  const Links =  {
    whatsapp: "https://wa.me/+919403080767",
    github: "https://github.com/nitesh11-dk", 
    linkedin: "https://www.linkedin.com/in/nitesh-dk/",
    discord: "https://discord.gg/yourdiscord"
  }

 export const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"], color: "bg-gray-700" },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB"], color: "bg-black" },
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"], color: "bg-gray-800" },
    { category: "Tools", items: ["Git", "Docker", "Linux"], color: "bg-brown-700" }
  ];

  