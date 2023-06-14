/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // threejs,
  project,
  viags,
  viagsDocumentation,
  photoshop,
  TMS
} from '../assets'

export interface NavLink {
  id: string
  title: string
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

export interface Service {
  title: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
]

export interface Technology {
  name: string
  icon: string
}

export const technologies: Technology[] = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'PhotoShop',
    icon: photoshop
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb
  // },
  // {
  //   name: 'Three JS',
  //   icon: threejs
  // },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  }
  // {
  //   name: 'docker',
  //   icon: docker
  // }
]

export interface Experience {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]

export interface Testimonial {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

export interface Project {
  id: number
  name: string
  user: string
  participants: number
  description: string
  partner: string
  image: string
  funtion: string
  source_code_link: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Watch E-commerce Website',
    user: 'Tran Dinh Nhat, Vo Nguyen Hai Dang',
    participants: 2,
    partner: 'Aptech Saigon',
    funtion:
      'A commerce website includes features such as a shopping cart, appointment booking, and other functionalities.',
    description:
      'The front-end project was assigned by Aptech SaiGon training center. The project was completed within a one-month timeframe with two individuals working together. I took responsibility for certain functionalities and the website interface.',
    image: project,
    source_code_link: 'https://github.com/'
  },
  {
    id: 2,
    name: 'Viags E-Offices',
    user: 'Tran Dinh Nhat, Nguyen Van Vu',
    participants: 2,
    partner: 'Vietnam Airport Ground Services Joint Stock Company - VIAGS',
    funtion:
      'The main functionalities of this project include creating requests for certain issues, approval process, sending emails, commenting at specific approval points, etc.',
    description:
      'My main responsibility is to develop and design user interfaces for software, ensuring that it functions correctly and follows the higher-level plans. The primary language used is React with TypeScript.',
    image: viags,
    source_code_link: 'https://github.com/'
  },
  {
    id: 3,
    name: 'Viags Document-Managerments',
    user: 'Tran Dinh Nhat, Nguyen Van Vu',
    participants: 2,
    partner: 'Vietnam Airport Ground Services Joint Stock Company - VIAGS',
    funtion:
      'Some key features include document management, role-based access control, rich text editor, diagram support, user notifications, document quantity statistics, etc.',
    description:
      'This is an outsourced software, and my task is to develop interfaces, functionalities, and bug fixes.',
    image: viagsDocumentation,
    source_code_link: 'https://github.com/'
  },
  {
    id: 4,
    name: 'Nam Phuong Task Managerment System',
    user: 'Tran Dinh Nhat',
    participants: 2,
    funtion: 'The main function is to assign daily tasks to employees and organize company-wide meetings.',
    partner: 'Nam Phuong Digital Technology Co., Ltd',
    description:
      'I am building a daily task management project for employees of my own company. The project is currently under development. The primary language used is React with TypeScript.',
    image: TMS,
    source_code_link: 'https://github.com/'
  }
]
