
const projects = [
  {
    slug: "neura-task",
    heading: "NeuraTask",
    subheading: "AI-Powered Intelligent Task Manager",
    description: "NeuraTask is a cutting-edge productivity tool that leverages artificial intelligence to revolutionize how users manage their daily workflows. Unlike standard to-do lists, NeuraTask uses AI to analyze task complexity and user habits, automatically prioritizing schedules for maximum efficiency. Built with Next.js for superior server-side rendering and SEO performance, and styled with Tailwind CSS for a responsive, modern aesthetic, it features a smart notification system that reduces alert fatigue by nudging users only when necessary.",
    imgSrc: "/NeuraTask.webp",
    href: "https://ai-task-manager-112.vercel.app",
    github: "https://github.com/lemon079/ai-task-manager",
    technologies: ["Next.js", "AI Integration", "Tailwind"],
    challenges: [
      "Integrating Langchain to provide consistent, context-aware task suggestions without high latency.",
      "Managing Agent's Memory",
      "Designing a notification system that works reliably across different devices and browsers.",
      "Managing complex state for recurring tasks and nested sub-tasks within a server-side rendered environment."
    ],
    keyLearnings: [
      "Mastered the implementation of Server Actions in Next.js 14 for secure API handling.",
      "Learned effective prompt/context engineering to extract structured JSON data from Large Language Models.",
      "Experienced on how to use vector database and implementing semantic search.",
      "How to handle Cron jobs for notifying using node-mailer.",
    ]
  },
  {
    slug: "sundown-studio",
    heading: "Sundown Studio",
    subheading: "Immersive 3D Animation Experience",
    description: "A pixel-perfect recreation of the award-winning Sundown Studio website, this project pushes the boundaries of web animation and frontend performance. It utilizes GSAP (GreenSock Animation Platform) and Locomotive Scroll to create a buttery-smooth, inertia-based scrolling experience. The site features complex parallax effects, magnetic buttons, and video-on-hover interactions that require precise DOM manipulation and extensive performance optimization to run at 60fps on average devices.",
    imgSrc: "/sundown-studio.webp",
    href: "https://sundown-studio-112.vercel.app",
    github: "https://github.com/lemon079/sundown-studio",
    technologies: ["GSAP", "Locomotive Scroll", "Frontend"],
    challenges: [
      "Synchronizing Locomotive Scroll's virtual scroll container with GSAP ScrollTrigger animations.",
      "How to design animation in a way such that it works on all devices.",
      "Ensuring responsive layout fidelity while maintaining complex absolute positioning for animated elements.",
      "Optimizing heavy media assets to prevent Cumulative Layout Shift (CLS) during loading."
    ],
    keyLearnings: [
      "Gained expertise in coordinate systems and transforming DOM elements for high-performance visual flair.",
      "Understood the 'locomotive scrolling' formula for smooth cursor and scroll movements.",
      "Learned how to debug complex animation timelines effectively and sync them.",
      "Hands-on experience on how to optimize resouces such as images in a fully animated website."
    ]
  },
  {
    slug: "threads-clone",
    heading: "Threads 2.0",
    subheading: "Fullstack Social Network",
    description: "A robust full-stack clone of the Threads application, engineered to support smooth social interactions. The application includes authentication, nested threaded comments, image uploads, and dynamic activity feeds. Built on the MERN stack (MongoDB, Express, React, Node.js), it uses Next.js Server Actions and route revalidation to keep the UI up to date after user interactions. Whenever users create posts, like content, or reply to threads, the interface refreshes with the latest data through controlled re-fetching instead of persistent WebSocket connections.",
    imgSrc: "/threads.webp",
    href: "https://thread-112.vercel.app",
    github: "https://github.com/lemon079/thread-clone",
    technologies: ["Nextjs", "Clerk", "webhook"],
    challenges: [
      "Designing a database schema efficiently to handle recursive/nested comment structures.",
      "How to authenticate users and reduce api calls",
      "Handling real-time concurrency when multiple users interact with the same post simultaneously.",
      "Updating the UI concurrently, when something changes"
    ],
    keyLearnings: [
      "Mastered the aggregation pipeline in MongoDB for complex data retrieval relationships.",
      "Learned how to implement webhooks and authentication using clerk.",
      "Fully understood when to use client components and when to use server components."
    ]
  },
  {
    slug: "realtime-chat-application",
    heading: "Real-Time Chat Application",
    subheading: "Full-Stack Messaging Platform",
    description: "A modern, full-stack real-time messaging platform built with the PERN stack (PostgreSQL, Express, React, Node.js). Features secure JWT authentication, real-time private and group messaging powered by Socket.IO, and a beautiful, responsive UI built with React and Tailwind CSS. Demonstrates proficiency in building scalable WebSocket applications with modern web technologies.",
    imgSrc: "/chat-2.png",
    href: "#",
    github: "https://github.com/lemon079/chat-app",
    technologies: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.IO", "Tailwind CSS", "NeonDB"],
    challenges: [
      "Implementing real-time bidirectional communication with Socket.IO for instant messaging.",
      "Designing a scalable database schema for chat rooms, messages, groups, and user relationships.",
      "Managing complex state synchronization between multiple connected clients.",
      "Implementing secure JWT authentication with HTTP-only cookies and session management."
    ],
    keyLearnings: [
      "Deep understanding of WebSocket protocols and real-time event-driven architecture.",
      "Mastered full-stack TypeScript development with type-safe API design.",
      "Learned PostgreSQL database design and complex relational data modeling.",
      "Gained experience with modern React patterns including Context API, custom hooks, and TanStack Query."
    ]
  },
  {
    slug: "jira-clone",
    heading: "Agile Board",
    subheading: "Enterprise Project Management System",
    description: "An enterprise-grade project management tool mimicking the core functionality of Jira, focusing on complex state management and user interaction. It features a fully interactive drag-and-drop Kanban board, sprint planning capabilities, and detailed ticket management. The UI is designed to handle high information density while remaining clean and intuitive, utilizing React's context API and custom hooks for efficient data flow and prop drilling avoidance.",
    imgSrc: "/jira.webp",
    href: "https://jira-clone-112.vercel.app",
    github: "https://github.com/lemon079/jira-clone",
    technologies: ["Nextjs", "Drag & Drop", "Appwrite", "honojs"],
    challenges: [
      "Implementing smooth, accessible drag-and-drop logic that persists state correctly on drop.",
      "Structuring the data to allow for seamless moving of tickets between columns and swimlanes.",
      "Optimizing re-renders in a complex UI where many elements change position frequently.",
    ],
    keyLearnings: [
      "Deepened understanding of optimistic UI patterns for immediate user feedback.",
      "Learned to structure complex React components for reusability and maintainability.",
      "Gained experience with local storage syncing for client-side data persistence.",
      "Hands - on experience using Appwrite and its SDK."
    ]
  },
  {
    slug: "the-villa",
    heading: "The Villa",
    subheading: "Luxury Real Estate Landing Page",
    description: "The Villa is a high-end landing page designed to evoke luxury, exclusivity, and modern architectural beauty. It focuses on aesthetic precision, advanced typography, and whitespace usage. The project demonstrates the ability to translate a complex design into a responsive React application pixel-for-pixel. It features subtle entry animations and a mobile-first responsive grid that adapts gracefully to any screen size, ensuring a premium feel across all devices.",
    imgSrc: "/villa.webp",
    href: "https://villa-project-112.vercel.app",
    github: "https://github.com/lemon079/Villa-Project",
    technologies: ["HTML", "CSS", "JS"],
    challenges: [
      "Balancing high-quality imagery with page load performance metrics (Core Web Vitals).",
      "Implementing a custom responsive navbar that transforms smoothly on mobile devices.",
      "Ensuring cross-browser compatibility for modern CSS grid layouts and flexbox gaps."
    ],
    keyLearnings: [
      "Improved eye for design details, specifically in spacing, kerning, and typography hierarchy.",
      "Learned efficiently to componentize repeating UI sections to keep code DRY.",
      "Mastered responsive design patterns beyond standard breakpoints (e.g., container queries)."
    ]
  },
  {
    slug: "fashi-fashion",
    heading: "Fashi Fashion",
    subheading: "Trendy E-Commerce Storefront",
    description: "A modern, responsive e-commerce storefront built with foundational web technologies to demonstrate core frontend competencies. This project highlights a deep understanding of semantic HTML, CSS styling, and vanilla JavaScript logic without relying on heavy frameworks. It includes a functioning carousel, product grid layouts, and a shopping cart simulation, serving as a testament to understanding the building blocks of the web.",
    imgSrc: "/fashi-ecommerce.webp",
    href: "https://fashi-ecommerce-112.vercel.app",
    github: "https://github.com/lemon079/Fashi-Website",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    challenges: [
      "Creating a fully responsive layout without using a CSS framework like Bootstrap or Tailwind.",
      "Managing the shopping cart state using only Vanilla JavaScript and LocalStorage.",
      "Figuring out the layout and structure of the website.",
      "Implementing a custom image slider logic from scratch without external libraries."
    ],
    keyLearnings: [
      "Solidified understanding of the DOM manipulation and event bubbling mechanisms.",
      "Learned the importance of semantic HTML for SEO and accessibility.",
      "Gained appreciation for modern frameworks by building core features manually first.",
      "Hands-on experience with css-preprocessor, SCSS."
    ]
  },
];

export default projects