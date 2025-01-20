import { format, differenceInYears, parseISO } from "date-fns";

const dateOfBirth = format(new Date(1998, 5, 9), "yyyy-MM-dd");
const startedWorking = format(new Date(2020, 3, 1), "yyyy-MM-dd");
const now = format(new Date(), "yyyy-MM-dd");

const yearsOfExperience = differenceInYears(now, parseISO(startedWorking));
const age = differenceInYears(now, parseISO(dateOfBirth));

export const meInfo = `Hi! I'm a ${age}-year-old developer originally from Varna, now living in Sofia since 2018. I studied at the High School of Mathematics "Dr Petar Beron" and have been working in development for ${yearsOfExperience} years. Outside of work, I enjoy board games, traveling, and taking walks with my dog. I also occasionally find myself spending a bit too much time exploring various content on YouTube.`;
