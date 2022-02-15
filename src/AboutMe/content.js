import RailsIcon from './icons/rails.svg?url';

const content = {
  en: {
    heading: {
      name: "Eric Roos",
      title: "Team/Tech Lead",
      summary: "<p>I want to build high quality software with great people with a mission of bettering the world we live in for <b>ALL</b> people. I believe in being <b>open, honest and transparent</b> throughout the entire project life cycle. I believe in <b>communicating early and often</b>. I believe that <b>details matter</b>. </p><p>Approaching 10 years of professional software development, and 20 years of hobby developing, I want to design software systems that are <b>concise, efficent, and solve the business need</b>while embracing an <b>agile, iterative approach</b>."
    },
    body: {
      WhatIDo: "What I do",
      WhatIDoContent: "I am a fullstack engineer, with a passion for system architecture using a variety of technologies. I have designed and maintained systems from the startup to the enterprise scale."
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
