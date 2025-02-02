export type Experience = {
  id: number;
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Team-GPT",
    role: "Software Developer",
    startDate: new Date("2024-10-01"),
    description: "",
  },
  {
    id: 2,
    company: "EnduroSat",
    role: "Software Developer",
    startDate: new Date("2021-03-08"),
    endDate: new Date("2024-10-01"),
    description:
      "Developing desktop application for satellite data processing with Electron and React.",
  },
  {
    id: 3,
    company: "Sofia University St. Kliment Ohridski",
    role: "Teaching Assistant in the course 'Object Oriented Programming'",
    startDate: new Date("2022-02-01"),
    endDate: new Date("2022-06-31"),
    description:
      "Teaching the basics of object oriented programming to first year students.",
  },
  {
    id: 4,
    company: "Sofia University St. Kliment Ohridski",
    role: "Teaching Assistant in the course 'Introduction to Computer Science'",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2022-01-31"),
    description:
      "Teaching the basics of computer science to first year students.",
  },
  {
    id: 5,
    company: "MindHub Coding Schools",
    role: "Team Lead Manager",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2021-06-31"),
    description:
      "Recruiting and managing a team of 5 mentors. Providing effective training while maintaining high results. Currently, the center provides an education for more than 120 kids.",
  },
  {
    id: 6,
    company: "AuxCode",
    role: "Back End Developer",
    startDate: new Date("2020-04-01"),
    endDate: new Date("2021-03-31"),
    description: "Developing web applications using MsSQL with TypeORM",
  },
  {
    id: 7,
    company: "MindHub Coding Schools",
    role: "Mentor",
    startDate: new Date("2019-02-01"),
    endDate: new Date("2020-06-31"),
    description:
      "Teaching kids and teenagers how to code and develop web applications.",
  },
];
