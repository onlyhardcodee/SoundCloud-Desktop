const fs = require('fs');
const path = require('path');

function saveCookies(cookies) {
  const filePath = path.join(__dirname, '../../cookies.json');
  fs.writeFileSync(filePath, JSON.stringify(cookies));
}

function loadCookies() {
  const filePath = path.join(__dirname, '../../cookies.json');
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath));
  }
  return [];
}

module.exports = { saveCookies, loadCookies };
