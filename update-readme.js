const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'question-practice');
const projectsDir = path.join(__dirname, 'projects');

// Count all files (ignoring hidden files)
const getCount = (dirPath) => {
  if (!fs.existsSync(dirPath)) return 0;
  return fs.readdirSync(dirPath).filter(item => {
    return !item.startsWith('.'); 
  }).length;
};

const questionsCount = getCount(questionsDir);
const projectsCount = getCount(projectsDir);

const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// The missing target strings have been restored here:
const questionsRegex = /[\s\S]*?/;
const questionsReplacement = `\n\n`;

const projectsRegex = /[\s\S]*?/;
const projectsReplacement = `\n\n`;

readmeContent = readmeContent.replace(questionsRegex, questionsReplacement);
readmeContent = readmeContent.replace(projectsRegex, projectsReplacement);

fs.writeFileSync(readmePath, readmeContent);
console.log(`Updated README: ${questionsCount} questions, ${projectsCount} projects.`);