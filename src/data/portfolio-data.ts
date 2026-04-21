export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'Franz Josef Siblos',
  role: 'Junior Web Developer',
  email: 'siblosfranz22@gmail.com',
  github: 'https://github.com/franz9113',
  seek: 'https://nz.seek.com/profiles/franzjosef-siblos-Y2z9HtdxBd',
  linkedin: 'https://www.linkedin.com/in/franz-siblos-8b6805354/',
  subheadline: 'Bridging the logic of full-stack development with the art of modern frontend engineering. I build scalable, high-performance web applications using the React ecosystem.',
  bio: [
    "I am a Junior Web Developer dedicated to building clean, high-performance, and interactive web applications. My current expertise lies in the modern frontend ecosystem, specifically Next.js, React, and TypeScript, using tools like Tailwind CSS to create seamless user experiences.",
    "My technical foundation was built as a Full-Stack Developer using PHP and MySQL. While I have since transitioned to mastering modern frontend frameworks, that experience gave me a critical understanding of database architecture and server-side logic—skills that allow me to build interfaces that integrate perfectly with complex backends.",
    "I am a disciplined professional and a rapid learner with a strong work ethic. Whether I am optimizing a responsive layout or managing application state, I am committed to delivering clean, maintainable code that solves real-world problems."
  ],
  profileImage: '/images/My_IMG.jpg',
};


// Skills
export const allSkills = [
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'PHP', icon: 'php' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'DaisyUI', icon: 'daisyui' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Figma', icon: 'figma' },
  { name: 'ShadcnUI', icon: 'shadcnui' },
  { name: 'Java', icon: 'openjdk' },
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css3' },
];

export const galleryItems = [
  {
    id: 1,
    title:
      'Microsoft Technology Associate (Database Administration Fundamentals)',
    category: 'Certificates',
    image: '/images/certificates/database_certificate.jpg',
  },
  {
    id: 2,
    title: 'Microsoft Technology Associate (Networking Fundamentals)',
    category: 'Certificates',
    image: '/images/certificates/networking_certificate.jpg',
  },
  {
    id: 3,
    title: 'Microsoft Technology Associate (Networking Fundamentals)',
    category: 'Certificates',
    image: '/images/certificates/security_certificate.jpg',
  },
  {
    id: 4,
    title: 'Foruta Mobile Application',
    category: 'Mobile Application',
    image: '/images/mobile_application/foruta.png',
  },
  {
    id: 5,
    title: 'Manta Mountain Resort',
    category: 'Web Development',
    image: '/images/web_development/manta.png',
  },
  {
    id: 6,
    title: 'Foruta ( Food Delivery)',
    category: 'Software Development',
    image: '/images/software_development/foruta.jpg',
  },
  {
    id: 7,
    title: 'Gold n Bean (Coffee Shop)',
    category: 'Software Development',
    image: '/images/software_development/goldnbean.jpg',
  },
   {
    id: 8,
    title: 'Abdawn Limited (E-commerce Website)',
    category: 'Web Development',
    image: '/images/web_development/abdawnlogo.png',
  },
];

export const projectDetails = {
  'Foruta ( Food Delivery)': {
    role: 'Full Stack Web Developer (Focus on Web Interfaces & UI Design)',
    tools: ['PHP', 'JavaScript', 'MySQL', 'Google Maps API', 'Firebase'],
    year: '2021',
    overview:
      'Foruta is a food delivery platform built during the COVID-19 pandemic to offer a low-cost alternative to services like Grab and Foodpanda. It aimed to reduce delivery fees while connecting users to nearby restaurants.',
    contribution:
      'I worked as a full stack developer with a primary focus on the admin dashboard, restaurant management interface, and landing page. I also contributed to the design direction of the mobile application to ensure consistency and usability.',
    links: [
      { label: 'Website Demo', url: '#' },
      { label: 'Archived Facebook Page', url: '#' },
    ],
  },
  'Foruta Mobile Application': {
    role: 'Mobile App Designer & Frontend Developer',
    tools: ['Figma', 'React Native', 'JavaScript', 'Firebase'],
    year: '2021',
    overview:
      'The mobile companion app for the Foruta food delivery platform, designed to provide customers with an intuitive ordering experience on their smartphones.',
    contribution:
      'I designed the complete user interface in Figma, focusing on user experience and accessibility. I also contributed to the frontend development using React Native, ensuring the design was implemented accurately.',
    links: [
      { label: 'View Mobile Designs', url: '#' },
      { label: 'App Store Listing', url: '#' },
    ],
  },
  'Manta Mountain Resort': {
    role: 'Web Developer & UI Designer',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    year: '2022',
    overview:
      'A comprehensive website for Manta Mountain Resort featuring booking systems, gallery showcases, and information about resort amenities and activities.',
    contribution:
      "I handled both the design and development of the website, creating a visually appealing interface that captures the resort's natural beauty while providing functional booking and information systems.",
    links: [
      { label: 'Website Demo', url: '#' },
      { label: 'Technical Documentation', url: '#' },
    ],
  },
  'Gold n Bean (Coffee Shop)': {
    role: 'Full Stack Developer & System Designer',
    tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    year: '2022',
    overview:
      'A point-of-sale and inventory management system for Gold n Bean coffee shop, designed to streamline operations and improve customer service efficiency.',
    contribution:
      'I developed the complete system from database design to user interface, including inventory tracking, sales reporting, and customer management features.',
    links: [
      { label: 'Website Demo', url: '#' },
      { label: 'Technical Documentation', url: '#' },
    ],
  },
   'Abdawn Limited (E-commerce Website)': {
    role: 'Full Stack Developer & System Designer',
    tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    year: '2022',
    overview:
       'A high-fidelity design concept for Abdawn Limited, focusing on the strategic rebranding of three premium French products for the Asian market. The project prioritizes visual storytelling to bridge European luxury with regional consumer aesthetics.',
    contribution:
      'I was solely responsible for the entire creative direction, from the initial UI/UX layouts to the implementation of custom frontend animations. As a design-first project, I focused on crafting a polished, interactive user experience that highlights product identity without underlying backend systems.',
    links: [
      { label: 'Website Demo', url: 'https://abdawn-limited.vercel.app/' },
      { label: 'Technical Documentation', url: '#' },
    ],
  },
};