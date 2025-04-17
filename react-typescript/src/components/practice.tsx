const myName: string = "Shashi";
const myAge: number = 24;
const isGraduated: boolean = true;
const skills: string[] = ["react", "next"];
const experience: [string, number] = ["developer", 3];

type Employee = {
  name: string;
  experience: number;
  skills: string[];
};

const employeeDetails: Employee = {
  name: "Shashi",
  experience: 5,
  skills: ["react", "next", "node"],
};

const allEmployees: Employee[] = [
  {
    name: "Shashi",
    experience: 3,
    skills: ["react", "next", "node"],
  },
  {
    name: "SIlambu",
    experience: 5,
    skills: [".net", "mySql", "angular"],
  },
];
