/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

console.log(">>> bundle.js loaded");

const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
  experienceTeachingJava: 5,
  experienceTeachingReact: 0, // pas d'expérience React
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log("Cpp:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(cTeacher);
console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(cTeacher);
console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
