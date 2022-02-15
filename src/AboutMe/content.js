import RailsIcon from './icons/rails.svg?url';

const content = {
  en: {
    heading: {
      name: "Eric Roos",
      title: "Team/Tech Lead",
      summary: "I want to build high quality software with great people with a mission of bettering the world we live in for ALL people. I believe in being open, honest and transparent throughout the entire project life cycle. I believe in communicating early and often. I believe that details matter. Closing in on 10 years of professional software development, and 20 years of hobby developing, I want to design software systems that are concise, efficent, and solve the business need. I embrace an agile, iterative approach to not only development, but delivery of software as well. Embracing the feedback from your customer or audience is one of the most important things required in making good software."
    },
    body: {
      WhatIDo: "What I do",
      WhatIDoContent: "I do consider myself a fullstack engineer, but prefer to stay at the backend part of the stack. I have stood up servers in AWS and managed them for my personal projects, and I have designed and implemented front ends as well. I routinely look for new patterns and tools to make managing a product easy and cost effective using a variety of technologies.."
    },
    languages: {
      javascript: {
        name: "JavaScript & React",
        description: "",
        icons: [],
      },
      ror: {
        name: "Ruby & Ruby on Rails",
        description: "",
        icons: [ RailsIcon ].join(",")
      },
      web: {
        name: "HTML & CSS",
        description: "",
        icons: [],
      },
      git: {
        name: "Git",
        description: "",
        icons: [],
      },
      java: {
        name: "Java",
        description: "",
        icons: [],
      },
      docker: {
        name: "Docker",
        description: "",
        icons: [],
      }
    }
  }
};

export default content;
