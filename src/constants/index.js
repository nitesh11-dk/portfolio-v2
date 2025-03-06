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
      href: 'https://docs.google.com/document/d/10cKAHCgjNiR5whSMzY4jdODX75Q_ohwj/edit?usp=sharing&ouid=116174180718668317883&rtpof=true&sd=true',
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
    // {
    //   title: 'CarePulse - Health Management System',
    //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    //   subdesc:
    //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    //   texture: '/textures/project/project3.mp4',
    //   logo: '/assets/project-logo3.png',
    //   logoStyle: {
    //     backgroundColor: '#60f5a1',
    //     background:
    //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //     border: '0.2px solid rgba(208, 213, 221, 1)',
    //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    //   },
    //   spotlight: '/assets/project-spotlight/spotlight3.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: '/textures/project/project4.mp4',
    //   logo: '/assets/project-logo4.png',
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: '/assets/project-spotlight/spotlight4.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/project-spotlight/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
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

  