const languages = ["Java", "JavaScript", "Python", "C++", "PHP"];

const rndLanguage = () => languages[Math.floor(Math.random() * languages.length)];

module.exports = rndLanguage;
