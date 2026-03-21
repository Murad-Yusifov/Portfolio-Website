export interface ExperienceInfo {
  currentCompany: string;
  role: string;
  projectsCompleted: number;
  remote: boolean;
}

 export interface DataType {
  id?: number | undefined  ;
  skills: string[];
  projectLink?: string,
  experience: string;
  experienceInfo: ExperienceInfo;
}

export interface ProjectCartProps {
  data?: DataType[] | null;
}

//  export const exampleData: DataType[] = [
//   {
//     id: "1",
//     skills: ["JavaScript, React, Node.js, MongoDB"],
//     projectLink: "somelinkinhere///",
//     experience: "3 years",
//     experienceInfo: {
//       currentCompany: "Tech Solutions",
//       role: "Full Stack Developer",
//       projectsCompleted: 15,
//       remote: true
//     },
//     createdAt: "2026-03-15",
//     updatedAt: "2026-03-15"
//   },
//   {
//     id: "2",
//     skills: ["TypeScript, Next.js, PostgreSQL"],
//     projectLink: "somelinkinhere///",
//     experience: "2 years",
//     experienceInfo: {
//       currentCompany: "Startup Labs",
//       role: "Frontend Developer",
//       projectsCompleted: 8,
//       remote: false
//     },
//     createdAt: "2026-03-15",
//     updatedAt: "2026-03-15"
//   }
// ];
