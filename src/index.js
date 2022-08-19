const languages = [
  "Java",
  "JavaScript",
  "Python",
  "C++",
  "PHP",
  "Fortran",
  "Clipper",
  "Haskel",
];

const rndLanguage = () =>
  languages[Math.floor(Math.random() * languages.length)];

module.exports = rndLanguage;
