const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'question-practice');
const projectsDir = path.join(__dirname, 'projects');

// Count all files (ignoring hidden files and sub-directories)
const getCount = (dirPath) => {
  if (!fs.existsSync(dirPath)) return 0;
  return fs.readdirSync(dirPath, { withFileTypes: true }).filter(entry => {
    return entry.isFile() && !entry.name.startsWith('.');
  }).length;
};

const questionsCount = getCount(questionsDir);
const projectsCount = getCount(projectsDir);

const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

const questionsRegex = /<!-- QUESTIONS_COUNT:START -->[\s\S]*?<!-- QUESTIONS_COUNT:END -->/;
const questionsReplacement = `<!-- QUESTIONS_COUNT:START -->\n<img src="https://img.shields.io/badge/Questions_Solved-${questionsCount}-blue?style=for-the-badge" alt="Questions Count" />\n<!-- QUESTIONS_COUNT:END -->`;

const projectsRegex = /<!-- PROJECTS_COUNT:START -->[\s\S]*?<!-- PROJECTS_COUNT:END -->/;
const projectsReplacement = `<!-- PROJECTS_COUNT:START -->\n<img src="https://img.shields.io/badge/Projects_Built-${projectsCount}-success?style=for-the-badge" alt="Projects Count" />\n<!-- PROJECTS_COUNT:END -->`;

readmeContent = readmeContent.replace(questionsRegex, questionsReplacement);
readmeContent = readmeContent.replace(projectsRegex, projectsReplacement);

fs.writeFileSync(readmePath, readmeContent);
console.log(`Updated README: ${questionsCount} questions, ${projectsCount} projects.`);