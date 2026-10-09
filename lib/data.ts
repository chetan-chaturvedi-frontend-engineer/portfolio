import { IProject } from '@/types';
import { University } from 'lucide-react';

export const GENERAL_INFO = {
    email: 'kumarchetan413@gmail.com',
    phone: 'tel:+918005768381',
    resume: 'https://docs.google.com/document/d/1ze6EQJK1FdY9abQEdzBhJJ72ITa_v6mU_f-wXBcSog8/edit?usp=sharing',
    emailSubject: "Open to New Opportunities",
    emailBody: 'Hi Chetan, I am reaching out to you because...',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    // upworkProfile: 'https://www.upwork.com/freelancers/Chetan',
};

export const SOCIAL_LINKS = [
    // { name: 'github', url: 'https://github.com/chetan-chaturvedi-frontend-engineer' },
    { name: 'linkedin', url: 'https://in.linkedin.com/in/chetan-chaturvedi-4476991bb' },
    { name: 'instagram', url: 'https://www.instagram.com/iamchaturrr/' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'GraphQL',
            icon: '/logo/graphql.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Fabric.js',
            icon: '/logo/fabricjs.png',
        },
        {
            name: 'CornerstoneJS',
            icon: '/logo/cornerstone.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Material-UI',
            icon: '/logo/material-ui.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'Webpack',
            icon: '/logo/webpack.png',
        },
        {
            name: 'Babel',
            icon: '/logo/babel.png',
        },
    ],
    backend: [
        {
            name: 'PHP',
            icon: '/logo/php.png',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.webp',
        },
        {
            name: 'Wordpress',
            icon: '/logo/wordpress.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        // {
        //     name: 'PostgreSQL',
        //     icon: '/logo/postgreSQL.png',
        // },
        // {
        //     name: 'MongoDB',
        //     icon: '/logo/mongodb.svg',
        // },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Bitbucket',
            icon: '/logo/bitbucket.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Azure',
            icon: '/logo/azure.png',
        },
        {
            name: 'CI/CD',
            icon: '/logo/cicd.png',
        },
        {
            name: 'Jira',
            icon: '/logo/jira.webp',
        },
        {
            name: 'Agile',
            icon: '/logo/agile.png',
        },
    ],
    aiTools: [
        {
            name: 'Claude',
            icon: '/logo/claude.png',
        },
        {
            name: 'ChatGPT',
            icon: '/logo/chatgpt.png',
        },
        {
            name: 'Copilot',
            icon: '/logo/copilot.png',
        },
        {
            name: 'Gemini',
            icon: '/logo/gemini.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Dexis Imaging',
        slug: 'dexis-imaging',
        liveUrl: 'https://dexis.com/',
        year: 2025,
        description: `Developed a web-based X-ray imaging platform (React.js, TypeScript, CornerstoneJS) featuring interactive annotation, measurement tools, and contrast/brightness controls for accurate diagnostic viewing.`,
        role: `
      Frontend Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>- Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>- State Management: Implemented client-side data fetching and caching</li>
        <li>- CMS Customization: Created admin interfaces for content editors</li>
        <li>- Deployment: Set up CI/CD pipeline for Vercel hosting</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'TypeScript',
            'CornerstoneJS',
            'Tailwind CSS',
            'shadcn',
            'Tanstack Query',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'BCXPro',
        slug: 'bcxpro',
        techStack: [
            'React',
            "Next.js", 
            "TypeScript",
            'Redux',
            'React i18n',
            'Bootstrap',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://bcxpro.io/',
        year: 2025,
        description: `Delivered a real-time trading platform (React.js, Next.js, Redux) with interactive price charts, live trade updates, and Redux-based state management; enhanced UI for mobile responsiveness.`,
        role: `As the frontend developer in a team of nine, I: <br/>
        - Built the frontend from scratch using React, Redux, Tanstack Query, and Bootstrap.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'CMO Rajasthan',
        slug: 'cmo-rajasthan',
        techStack: [
            'React.js',
            'Mysql',
            'PHP',
            'Bootstrap',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: '',
        year: 2023,
        description:
            'Designed and shipped citizen-service modules (React.js, Bootstrap, REST APIs) for Rajasthan Government portals, gathering requirements from stakeholders and enforcing strict API security protocols.',
        role: `As the Fullstack developer, I:<br/>
        - Designed and developed the platform end-to-end using React.js, Mysql, PHP, and Bootstrap.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },

];

export const MY_EXPERIENCE = [
    {
        title: 'Sr Software Engineer',
        company: 'Zimetrics Technologies',
        duration: 'Nov 2025 - Present',
    },
    {
        title: 'Programmer',
        company: 'Dotsquares Technologies',
        duration: 'Oct 2021 - Nov 2025',
    },
    {
        title: 'Web Developer',
        company: 'Brash Technologies',
        duration: 'Dec 2020 - Sep 2021',
    },
];

export const MY_EDUCATION = [
    {
        duration: 'Jul 2026 - Dec 2020',
        university: 'University of Rajasthan',
        degree: 'Bachelor of Computer Applications.',
        percentage: '67%',
    },

];

export const CERTIFICATIONS = [
    {
        title: 'Frontend Developer (React)',
        liveUrl: 'https://www.hackerrank.com/certificates/12194960e336',
        organization: 'HackerRank Role Certification',
        thumbnail: '/certifications/hackerrank.png'
    },
    {
        title: 'Generative AI',
        liveUrl: 'https://www.linkedin.com/learning/certificates/50c56e959eca4ddccaca27e6da96fcbdf2b7cf5ce8b52a925f772a68ea30abca?trk=share_certificate',
        organization: 'LinkedIn Learning',
        thumbnail: '/certifications/linkedin-learning.jpeg'
    },

];