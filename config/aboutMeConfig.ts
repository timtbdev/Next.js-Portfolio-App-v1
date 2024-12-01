import { AboutMeConfigType } from "@/types";

const aboutMeConfig: AboutMeConfigType = {
  image: {
    src: "/images/about_me_image.jpg",
    alt: "About Me Image",
  },
  content: [
    {
      text: "Tim (Tumur Bazarragchaa), born in 1982 in Ulaanbaatar, Mongolia. In 2000, his family left Mongolia in search of a better life—his parents and brother settled in California, while Tim moved to Germany to pursue his studies.",
    },
    {
      text: "He graduated in 2008 with a degree in Computer Science and secured a position as a Test Engineer at a leading online and mobile banking company in Germany. However, his work visa was denied, forcing him to return to Mongolia.",
    },
    {
      text: "In 2009, Tim joined Mongolia’s leading telecom company and took charge of launching BlackBerry services. He helped sell over 6,000 devices and got them all set up and running smoothly.",
    },
    {
      text: "In 2012, he founded his own Android app company, publishing two apps before closing the startup in 2013. He later led a team on Mongolia’s largest hydropower project, securing funding through a successful feasibility study.",
    },
    {
      text: "In 2016, Tim reunited with his family in the United States. While working in ride-sharing, he resumed his passion for Android development, launching two additional apps.",
    },
    {
      text: "In 2020, Tim started working at Tesla in Fremont as a Production Associate, building cars on the assembly line. He was recognized for his hard work with two Employee Appreciation Awards.",
    },
    {
      text: "In 2023, Tim married his soulmate, Dogi, and they welcomed their daughter, Undra.",
    },
    {
      text: "These days, he’s focused on improving his skills and building great Android apps.",
      url: {
        link: "/files/resume.pdf",
        text: "Download Resume",
        external: false,
      },
    },
  ],
};

export default aboutMeConfig;
