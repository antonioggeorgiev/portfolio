export type Experience = {
  id: number;
  company: string;
  role: string;
  startDate: Date;
  endDate: Date;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    role: "Senior Developer",
    startDate: new Date("2020-01-01"),
    endDate: new Date(),
    description:
      "Leading a team of developers in creating cutting-edge web applications using React and Node.js.",
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    role: "Full Stack Developer",
    startDate: new Date("2018-03-01"),
    endDate: new Date("2019-12-31"),
    description:
      "Developed and maintained multiple client websites and internal tools using various technologies.",
  },
  {
    id: 3,
    company: "StartUp Ventures",
    role: "Junior Developer",
    startDate: new Date("2016-06-01"),
    endDate: new Date("2018-02-28"),
    description:
      "Assisted in the development of a SaaS platform, focusing on front-end implementation with React.",
  },
];
