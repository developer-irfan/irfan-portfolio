/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Irfan",
  logo_name: "M-IRFAN()",
  nickname: "irfoo",
  full_name: "Muhammad Irfan",
  subTitle:
    "MERN Stack Developer, UI/UX Designer 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Eb8CN0p9AvL78gQ1LJ-E8OXl89cbYhTK/view",
  mail: "muhammadirfan9273@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/developer-irfan",
  linkedin: "https://www.linkedin.com/in/mirfan-999/",
  gmail: "muhammadirfan9273@gmail.com",
  facebook: "https://web.facebook.com/irfoMIB",
  twitter: "https://twitter.com/M_irfan288",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Design mobile applications using React-Native",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Creating apis (REST Apis) & Crud"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#fffff",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "React-Native",
          fontAwesomeClassname: "simple-icons:react-native",
          style: {
            color: "#439743",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Adobe XD",
        "⚡ Designing mobile apps & websites",
        "⚡ Mockups and its prototyping",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Software Engineering from KUST",
      subtitle: "Bachelor in Information Technology",
      logo_path: "kust.jpg",
      alt_name: "SSEC",
      duration: "2022 - Graduated",
      descriptions: [
        "⚡ Recently completed my graduation in software engineering."
      ],
      website_link: "http://kust.edu.pk/",
    },
    {
      title: "FSC in computer science",
      subtitle: "Fsc in computer science from Quad Inter College",
      logo_path: "quad.jpg",
      alt_name: "SSGC",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have studied core topics about computer",
        "⚡ Just getting the concepts of how the things works",
      ],
      website_link: "https://www.eduvision.edu.pk/quaid-inter-college-kohat-ins-137748462",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ReactJS Basics",
      subtitle: "Linkedln Learning",
      logo_path: "reactt.png",
      certificate_link:
        "https://drive.google.com/file/d/1_lpkOJOA9M7Ff4kqg9ZYPdjtZZ559zuh/view?usp=sharing",
      alt_name: "linkedln learning",
      // color_code: "#2AAFED",
      color_code: "gray",
    },
    {
      title: "React-Native",
      subtitle: "Linkedln Learning",
      logo_path: "reactt.png",
      certificate_link:
        "https://drive.google.com/file/d/1RLtLK7Ah_yIh0TbI9slwMMPJm49SurkP/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "Adobe XD ",
      subtitle: "UI/UX",
      logo_path: "xd.png",
      certificate_link:
        "https://drive.google.com/file/d/1vsxVjd1NhBxMjXYVap3zOFogaSkVmoR9/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "ReactJS Freelancer",
          company: "Fivver & Outsourcing",
          company_url: "https://www.fiverr.com/",
          logo_path: "fivver.png",
          duration: "Oct 2021 - Feb 2022",
          location: "Remote",
          description:
          `Taking react js projects from social medias clients, friends and get any out source project and completed it successfully.
          `,
          
          color: "#0071C5",
        },
     
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "5.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Simple Real Estate Website",
      url: "https://real-state-site.netlify.app/portfolio",
      description: "This is just simple real estate website in which there are homes available for selling",
      languages: [
        {
          name: "Reactjs",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Online watching movie site",
      url: "https://onlinemoviesapp.web.app/",
      description:
        "A React simple online movie watching website which inludes some of holly wood movies",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "Ecommerce site",
      url: "https://foodrecipe-7fc88.web.app/topdishes",
      description:
        "A simple ecommerce website in which there are some commadities like watch, wheel chairs available for sale",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Simple color picker app",
      url: "https://colorpickerapp-be53b.web.app/",
      description:
        "List of all colors includes its code just click on color the code is copied",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://m-irfan.netlify.app/",
      description:
        "My first simple portfolio website",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "Kohat driving school system",
      url: "https://kohat-driving-school-fyp.netlify.app/",
      description:
        "My fyp project of kohat driving school system",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
