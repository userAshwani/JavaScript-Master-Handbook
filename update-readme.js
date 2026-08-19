const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'question-practice');
const configPath = path.join(__dirname, 'repo-config.json');

// Count .js files for questions
const getFileCount = (dirPath) => {
  if (!fs.existsSync(dirPath)) return 0;
  return fs.readdirSync(dirPath, { withFileTypes: true }).filter(entry =>
    entry.isFile() && entry.name.endsWith('.js')
  ).length;
};

const questionsCount = getFileCount(questionsDir);

// Main project count comes from repo-config.json — update it when starting a new main project
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const mainProjectsCount = config.mainProjects.length;

const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

const questionsRegex = /<!-- QUESTIONS_COUNT:START -->[\s\S]*?<!-- QUESTIONS_COUNT:END -->/;
const questionsReplacement = `<!-- QUESTIONS_COUNT:START -->\n<img src="https://img.shields.io/badge/Questions_Created-${questionsCount}-blue?style=for-the-badge" alt="Questions Count" />\n<!-- QUESTIONS_COUNT:END -->`;

const projectsRegex = /<!-- PROJECTS_COUNT:START -->[\s\S]*?<!-- PROJECTS_COUNT:END -->/;
const projectsReplacement = `<!-- PROJECTS_COUNT:START -->\n<img src="https://img.shields.io/badge/Main_Projects-${mainProjectsCount}-success?style=for-the-badge" alt="Projects Count" />\n<!-- PROJECTS_COUNT:END -->`;

readmeContent = readmeContent.replace(questionsRegex, questionsReplacement);
readmeContent = readmeContent.replace(projectsRegex, projectsReplacement);

fs.writeFileSync(readmePath, readmeContent);
console.log(`Updated README: ${questionsCount} questions created, ${mainProjectsCount} main project(s).`);